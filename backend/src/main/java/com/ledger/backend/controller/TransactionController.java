package com.ledger.backend.controller;

import com.ledger.backend.dto.ApiResponse;
import com.ledger.backend.model.Transaction;
import com.ledger.backend.service.TransactionService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/{userId}/transactions")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TransactionController {
    final TransactionService transactionService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<Transaction>>> getAllTransactionsByUser(@PathVariable String userId,
                                                                                   @RequestParam(required = false)
                                                                                   @DateTimeFormat(pattern = "dd/MM/yyyy") LocalDateTime startDate,
                                                                                   @RequestParam(required = false)
                                                                                   @DateTimeFormat(pattern = "dd/MM/yyyy") LocalDateTime endDate) {
        List<Transaction> transactionsList = null;
        if (startDate == null || endDate == null)
            transactionsList = transactionService.getAllTransactionsByUser(userId);
        else transactionsList = transactionService.getTransactionsByUserIdAndDateRange(userId, startDate, endDate);
        for (Transaction transaction : transactionsList) {
            transaction.setTimestamp(LocalDateTime.parse(LocalDateTime.now().format(java.time.format.DateTimeFormatter.ofPattern("hh:mm a dd/MM/yyyy"))));
        }
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
            @PathVariable String transactionId
    ) {
        Transaction transaction = transactionService.getTransactionByIdForUser(userId, transactionId);
        transaction.setTimestamp(LocalDateTime.parse(LocalDateTime.now().format(java.time.format.DateTimeFormatter.ofPattern("hh:mm a dd/MM/yyyy"))));
        return new ResponseEntity<>(new ApiResponse<>(true, "transaction found", transaction), HttpStatus.OK);
    }

    @PutMapping("/{transactionId}")
    public ResponseEntity<ApiResponse<Transaction>> updateTransactionById(
            @PathVariable String userId,
            @PathVariable String transactionId,
            @RequestBody Transaction updatedTransaction) {
        Transaction transaction = transactionService.updateTransactionForUser(userId, transactionId, updatedTransaction);
        return new ResponseEntity<>(new ApiResponse<>(true, "transaction updated", transaction), HttpStatus.OK);
    }

    @DeleteMapping("/transactionId")
    public ResponseEntity<ApiResponse<Transaction>> deleteTransactionById(@PathVariable String userId, @PathVariable String transactionId) {
        Transaction transaction = transactionService.getTransactionByIdForUser(userId, transactionId);
        if (transaction != null) transactionService.deleteTransactionForUser(userId, transactionId);
        return new ResponseEntity<>(new ApiResponse<>(true, "transaction deleted", null), HttpStatus.NO_CONTENT);
    }

}
