package com.ledger.backend.service;

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

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.*;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TransactionService {

    private static final Random randomInt = new Random();
    final TransactionRepo transactionRepository;
    final UserRepo userRepository;
    final CategoryRepo categoryRepository;
    final AccountRepo accountRepo;
    final AccountService accountService;
    final CategoryService categoryService;

    public Transaction createTransactionForUser(String userId, Transaction transaction) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new AccountNotFoundException(userId));
        transaction.setUser(user);
        Account acc = accountRepo.findById(transaction.getAccount().getId()).orElse(null);
        if (acc == null) {
            Account account = accountService.addAccount(transaction.getAccount());
            transaction.setAccount(account);
        }
        if (transaction.getCategories() != null) {
            Set<Category> categories = new HashSet<>();
            for (Category cat : transaction.getCategories()) {
                Category category = categoryRepository.findById(cat.getId())
                        .orElse(null);
                if (category == null) {
                    Category c = categoryService.addCategory(cat);
                    categories.add(c);
                }
            }
            if (!categories.isEmpty()) transaction.setCategories(categories);
        }
        Transaction saved = transactionRepository.save(transaction);
        String txnId = generateTransactionId();
        saved.setId(txnId);
        return transactionRepository.save(saved);
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
                .orElseThrow(() -> new AccountNotFoundException(updatedTransaction.getAccount().getId()));
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
