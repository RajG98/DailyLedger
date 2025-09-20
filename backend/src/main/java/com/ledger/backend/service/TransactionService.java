package com.ledger.backend.service;

import com.ledger.backend.model.Transaction;
import com.ledger.backend.repository.TransactionRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TransactionService {

    final TransactionRepo repository;

    public Transaction createTransaction(Transaction transaction) {
        Transaction saved = repository.save(transaction);
        String txnId = generateTransactionId();
        saved.setId(txnId);
        return repository.save(saved);
    }

    private String generateTransactionId() {
        String timestamp = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
        String random = String.valueOf(new Random().nextInt(999999));
        return "TXN" + timestamp + random;
    }
}
