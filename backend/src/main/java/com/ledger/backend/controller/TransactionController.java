package com.ledger.backend.controller;

import com.ledger.backend.dto.ApiResponse;
import com.ledger.backend.model.Transaction;
import com.ledger.backend.service.TransactionService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/{userId}/transactions")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TransactionController {
    final TransactionService transactionService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<Transaction>>> getAllTransactionsByUser(@PathVariable String userId) {
        List<Transaction> transactionsList = transactionService.getAllTransactionsByUser(userId);
        return new ResponseEntity<>(new ApiResponse<>(true, "transactions fetched successfully", transactionsList), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Transaction>> createTransaction(@PathVariable String userId, @RequestBody Transaction request) {
        Transaction created = transactionService.createTransactionForUser(userId, request);
        return new ResponseEntity<>(new ApiResponse<>(true, "transaction saved", created), HttpStatus.CREATED);
    }

    // ✅ Get transaction by ID for a user
    @GetMapping("/{transactionId}")
    public ResponseEntity<ApiResponse<Transaction>> getTransactionById(
            @PathVariable String userId,
            @PathVariable String transactionId) {
        Transaction transaction = transactionService.getTransactionByIdForUser(userId, transactionId);
        return new ResponseEntity<>(new ApiResponse<>(true, "transaction found", transaction), HttpStatus.OK);
    }

}
