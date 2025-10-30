package com.ledger.backend.service;

import com.ledger.backend.dto.TransactionRequest;
import com.ledger.backend.exception.AccountNotFoundException;
import com.ledger.backend.exception.CategoryNotFoundException;
import com.ledger.backend.exception.TransactionNotFoundException;
import com.ledger.backend.model.Account;
import com.ledger.backend.model.Category;
import com.ledger.backend.model.Transaction;
import com.ledger.backend.model.User;
import com.ledger.backend.repository.AccountRepo;
import com.ledger.backend.repository.CategoryRepo;
import com.ledger.backend.repository.TransactionRepo;
import com.ledger.backend.repository.UserRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TransactionService {

    private static final Random randomInt = new Random();
    final TransactionRepo transactionRepository;
    final UserRepo userRepository;
    final CategoryRepo categoryRepository;
    final AccountRepo accountRepo;
    //final AccountService accountService;
    final CategoryService categoryService;

    @Transactional
    public Transaction createTransactionForUser( TransactionRequest request) {
        Transaction transaction= new Transaction();
        transaction.setAmount(request.getAmount());
        transaction.setType(Transaction.Type.valueOf(request.getType()));
        transaction.setTitleDes(request.getTitleDes());
        // 1. Find User
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new AccountNotFoundException(request.getUserId()));
        transaction.setUser(user);
        int money;
        if(request.getType().equalsIgnoreCase("EXPENSE"))
            money= -Integer.parseInt(request.getAmount());
        else money = Integer.parseInt(request.getAmount());
        // 2. Handle Account
        int finalMoney = money;
        Account account = accountRepo.findById(request.getAccountId())
                .orElseThrow(()->new AccountNotFoundException(request.getAccountId()));
        account.setAmount(account.getAmount()+finalMoney);

        transaction.setAccount(account);

        // 3. Handle Categories
        if (request.getCategories() != null && !request.getCategories().isEmpty()) {
            Set<Category> resolvedCategories = request.getCategories().stream()
                    .map(cat -> categoryRepository.findByName(cat.getName())
                            .orElseGet(() -> categoryService.addCategory(new Category(cat.getName()))))
                    .collect(Collectors.toSet());
            transaction.setCategories(resolvedCategories);
        }

        // 4. Generate custom transaction ID (if required)
        transaction.setId(generateTransactionId());

        // 5. Save once
        return transactionRepository.save(transaction);
    }

    private String generateTransactionId() {
        String timestamp = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
        String random = String.valueOf(randomInt.nextInt(999999));
        return "TXN" + timestamp + random;
    }

    public List<Transaction> getAllTransactionsByUser(String userId) {
        return transactionRepository.findByAccountUserId(userId);
    }

    public Transaction getTransactionByIdForUser(String userId, String transactionId) {
        return transactionRepository.findByIdAndAccountUserId(transactionId, userId).orElseThrow(() -> new TransactionNotFoundException(transactionId, userId));
    }

    // ✅ Update a transaction for a user
    public Transaction updateTransactionForUser(String userId, String transactionId, Transaction updatedTransaction) {
        Transaction existing = transactionRepository.findByIdAndAccountUserId(transactionId, userId)
                .orElseThrow(() -> new TransactionNotFoundException(transactionId, userId));

        Account acc = accountRepo.findById(updatedTransaction.getAccount().getId())
                .orElseThrow(() -> new AccountNotFoundException(String.valueOf(updatedTransaction.getAccount().getId())));
        existing.setAccount(acc);
        existing.setAmount(updatedTransaction.getAmount());
        existing.setType(updatedTransaction.getType());
        existing.setTitleDes(updatedTransaction.getTitleDes());
        if (updatedTransaction.getCategories() != null) {
            Set<Category> categories = new HashSet<>();
            for (Category cat : updatedTransaction.getCategories()) {
                Category existingCategory = categoryRepository.findById(cat.getId())
                        .orElseThrow(() -> new CategoryNotFoundException(cat.getId()));
                categories.add(existingCategory);
            }
            existing.setCategories(categories);
        }
        return transactionRepository.save(existing);
    }

    // ✅ Delete a transaction for a user
    public void deleteTransactionForUser(String userId, String transactionId) {
        Transaction existing = transactionRepository.findByIdAndAccountUserId(transactionId, userId)
                .orElseThrow(() -> new TransactionNotFoundException(transactionId, userId));
        transactionRepository.delete(existing);
    }

    // ✅ Filter transactions for a user by date range
    public List<Transaction> getTransactionsByUserIdAndDateRange(String userId, LocalDateTime start, LocalDateTime end) {
        return transactionRepository.findByUserIdAndTimestampBetween(userId, start, end);
    }
}
