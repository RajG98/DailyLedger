package com.ledger.backend.exception;

public class TransactionNotFoundException extends RuntimeException {
    public TransactionNotFoundException(String transactionId, String userId) {

        super("Transaction id: " + transactionId + " not found for user: " + userId);
    }
}
