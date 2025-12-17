package com.ledger.backend.repository;

import com.ledger.backend.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AccountRepo extends JpaRepository<Account, String> {
    Optional<Account> findByTitle(String accountName);

    List<Account> findByUserId(String userId);

    Optional<Account> findByIdAndUserId(String accountId, String userId);
}
