package com.ledger.backend.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String userId) {
        super("User Id: " + userId + ", not found");
    }
}
