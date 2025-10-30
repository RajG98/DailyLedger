package com.ledger.backend.repository;

import com.ledger.backend.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface AccountRepo extends JpaRepository<Account, String> {
    Optional<Account> findByTitle(String accountName);
}
