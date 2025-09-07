package com.ledger.backend.repository;

import com.ledger.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User,String> {
    Optional<User> findByEmail(String email);
    Optional<Boolean> existsByEmail(String email);
}
