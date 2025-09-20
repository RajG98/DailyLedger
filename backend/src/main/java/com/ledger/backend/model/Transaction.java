package com.ledger.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "transactions")
public class Transaction {
    @Id
    @Column(name = "txn_id",updatable = false)
    private String id;
    @Column(name = "title_desc",nullable = false)
    private String titleDes;
    @Column(nullable = false)
    private String amount;
    @Column(nullable = false,updatable = false)
    private String time;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Type type;
    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;
    @ManyToMany
    @JoinTable(
            name = "transaction_category", // join table
            joinColumns = @JoinColumn(name = "transaction_id"), // FK column to Transaction
            inverseJoinColumns = @JoinColumn(name = "category_id") // FK column to Category
    )
    private Set<Category> categories = new HashSet<>();// e.g., "Food", "Shopping", "Travel"
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @PrePersist
    public void onCreate(){
        this.time=java.time.LocalDateTime.now().format(java.time.format.DateTimeFormatter.ofPattern("hh:mm a dd/MM/yyyy"));
    }
    public enum Type{
        EXPENSE,INCOME
    }
}
