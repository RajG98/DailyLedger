package com.ledger.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "accounts")
public class Account {
    @Id
    @Column(name = "account_id",updatable = false)
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String title;
    private int amount;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
