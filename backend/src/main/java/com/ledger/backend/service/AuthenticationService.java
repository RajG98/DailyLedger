package com.ledger.backend.service;


import com.ledger.backend.dto.LoginUser;
import com.ledger.backend.dto.RegisterUser;
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
    public User authenticate(LoginUser user) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(),user.getPassword()));
        return userRepo.findByEmail(user.getEmail()).orElseThrow(()->new UsernameNotFoundException("User not found!"));
    }
    public User signup(RegisterUser registeredUser){
        User user=new User();
        user.setName(registeredUser.getName());
        user.setEmail(registeredUser.getEmail());
        user.setPassword(passwordEncoder.encode(registeredUser.getPassword()));
        return userRepo.save(user);
    }

    public boolean accountExists(String email) {
        //return true;
        return userRepo.existsByEmail(email).orElseThrow();
    }
}
