package com.ledger.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

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
    private String amount;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Account(String name, int finalMoney) {
        this.title=name;
        this.amount= String.valueOf(finalMoney);
    }
}
