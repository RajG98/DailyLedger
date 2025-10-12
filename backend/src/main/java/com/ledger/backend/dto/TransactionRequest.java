package com.ledger.backend.dto;

import com.ledger.backend.model.Account;
import com.ledger.backend.model.Category;
import com.ledger.backend.model.Transaction;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TransactionRequest {
    private Set<Category> categories = new HashSet<>();
    private Account account;
    private Transaction transaction;
}
