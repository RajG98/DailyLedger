package com.ledger.backend.dto;

import com.ledger.backend.model.Account;
import com.ledger.backend.model.Category;
import com.ledger.backend.model.Transaction;
import com.ledger.backend.model.User;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TransactionResponse {
    private String id;
    private String titleDes;
    private String amount;
    private String timestamp;
    private String type;

}
