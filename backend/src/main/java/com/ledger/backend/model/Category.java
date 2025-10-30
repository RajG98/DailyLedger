package com.ledger.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "categories")
public class Category {
    @Id
    @Column(name = "category_id",updatable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    private String name;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Category(String name) {
        this.name=name;
    }
}
