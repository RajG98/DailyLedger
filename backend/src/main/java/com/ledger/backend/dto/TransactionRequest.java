package com.ledger.backend.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.util.ArrayList;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TransactionRequest {
    private String userId;
    private String titleDes;
    private String amount;
    private String timestamp;
    private String type;
    // Optional: for creating new accounts/categories directly
    private String accountId;
    private List<CategoryRequest> categories= new ArrayList<>();

    // Getters and setters
}

