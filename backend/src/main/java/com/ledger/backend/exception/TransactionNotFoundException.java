package com.ledger.backend.exception;

public class TransactionNotFoundException extends RuntimeException {
    public TransactionNotFoundException(String transactionId) {

        super("Transaction id: " + transactionId + " not found.");
    }
}
