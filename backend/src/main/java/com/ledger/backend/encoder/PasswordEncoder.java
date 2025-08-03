package com.ledger.backend.encoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncoder {

    public static void main(String[] args) {
        // Create an instance of BCryptPasswordEncoder
        // You can specify a strength parameter (e.g., 10 for default)
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        String rawPassword = "admin123";
        String encodedPassword = passwordEncoder.encode(rawPassword);

        System.out.println("Raw Password: " + rawPassword);
        System.out.println("Encoded Password: " + encodedPassword);

        // To verify a password later
        boolean isMatch = passwordEncoder.matches(rawPassword, encodedPassword);
        System.out.println("Password matches: " + isMatch);
    }
}