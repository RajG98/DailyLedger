package com.ledger.backend.exception;

public class AccountNotFoundException extends RuntimeException {
    public AccountNotFoundException(String userId) {

        super("User Id: " + userId + ", not found");
    }
}
