package com.ledger.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

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
    @JsonBackReference
    private User user;
    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Transaction> transaction;

    public Account(String name, int finalMoney) {
        this.title=name;
        this.amount= String.valueOf(finalMoney);
    }
}
