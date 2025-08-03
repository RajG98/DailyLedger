package com.ledger.backend.service;


import com.ledger.backend.model.User;
import com.ledger.backend.repository.UserRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AuthenticationService {
    final UserRepo userRepo;
    final AuthenticationManager authenticationManager;
    final PasswordEncoder passwordEncoder;
    public User authenticate(User user) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(),user.getPassword()));
        return userRepo.findByEmail(user.getEmail()).orElseThrow(()->new UsernameNotFoundException("User not found!"));
    }
    public User signup(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }
}
