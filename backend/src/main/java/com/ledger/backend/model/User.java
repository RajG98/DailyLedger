package com.ledger.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.UUID;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false, unique = true,length = 100)
    private String email;
    @Column(nullable = false,length = 50)
    private String password;
    @CreationTimestamp
    @Column(name = "created_at",updatable = false)
    private String createdAt;
    @UpdateTimestamp
    @Column(name = "updated_at")
    private String updatedAt;
}
