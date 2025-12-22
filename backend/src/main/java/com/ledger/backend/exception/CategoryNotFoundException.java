package com.ledger.backend.exception;


public class CategoryNotFoundException extends RuntimeException {
    public CategoryNotFoundException(String id) {
        super("Category id: " + id + " not found");
    }
}
