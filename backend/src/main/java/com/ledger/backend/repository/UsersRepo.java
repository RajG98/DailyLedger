package com.ledger.backend.repository;

import com.ledger.backend.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

public interface UsersRepo extends JpaRepository<Users,String> {
    Optional<Users> findByEmail(String email);
}
