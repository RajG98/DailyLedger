package com.ledger.backend.service;

import com.ledger.backend.model.Account;
import com.ledger.backend.repository.AccountRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AccountService {
    final AccountRepo accountRepo;

    public Account addAccount(Account acc) {
        return accountRepo.save(acc);
    }
}
