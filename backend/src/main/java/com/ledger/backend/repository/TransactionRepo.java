package com.ledger.backend.repository;

import com.ledger.backend.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TransactionRepo extends JpaRepository<Transaction,String> {
    List<Transaction> findByAccountUserId(String userId);

    //List<Transaction> findByAccountUserIdAndTimestampBetween(String userId, LocalDateTime start, LocalDateTime end);
    Optional<Transaction> findByIdAndAccountUserId(String transactionId, String userId);
}
