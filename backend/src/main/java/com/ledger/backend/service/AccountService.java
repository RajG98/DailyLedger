package com.ledger.backend.service;

import com.ledger.backend.dto.AccountRequest;
import com.ledger.backend.exception.AccountNotFoundException;
import com.ledger.backend.exception.TransactionNotFoundException;
import com.ledger.backend.model.Account;
import com.ledger.backend.model.User;
import com.ledger.backend.repository.AccountRepo;
import com.ledger.backend.repository.UserRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AccountService {
    final AccountRepo accountRepo;
    final UserRepo userRepository;


    public Account addAccount(Account acc) {
        return accountRepo.save(acc);
    }

    public List<Account> getAccounts(String userId) {
        return accountRepo.findByUserId(userId);
    }

    public Account createAccount(String userId, AccountRequest request) {
        Account account= new Account();
        User user = userRepository.findById(userId).orElseThrow(() -> new AccountNotFoundException(userId));
        account.setTitle(request.getTitle());
        account.setAmount(request.getAmount());
        account.setUser(user);
        return accountRepo.save(account);
    }

    public Account getAccountByIdForUser(String userId, String accountId) {
        return accountRepo.findByIdAndUserId(accountId,userId).orElseThrow(() -> new AccountNotFoundException(accountId));
    }

    public void deleteAccountForUser(String userId, String accountId) {
        Account account= accountRepo.findByIdAndUserId(accountId,userId).orElseThrow(() -> new AccountNotFoundException(accountId));
        accountRepo.delete(account);
    }

    public Account updateAccountForUser(String userId, String accountId, AccountRequest updatedAccount) {
        Account account= accountRepo.findByIdAndUserId(accountId,userId).orElseThrow(() -> new AccountNotFoundException(accountId));
        account.setAmount(updatedAccount.getAmount());
        account.setTitle(updatedAccount.getTitle());
        return accountRepo.save(account);
    }
}
