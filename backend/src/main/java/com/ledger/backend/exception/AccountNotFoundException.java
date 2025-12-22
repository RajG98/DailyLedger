package com.ledger.backend.exception;

public class AccountNotFoundException extends RuntimeException {
    public AccountNotFoundException(String accountId) {

        super("Account Id: " + accountId + ", not found");
    }
}
