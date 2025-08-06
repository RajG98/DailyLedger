package com.ledger.backend.controller;

import com.ledger.backend.repository.OtpStorage;
import com.ledger.backend.service.EmailService;
import com.ledger.backend.util.OtpUtil;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/otp")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OtpController {
    final EmailService emailService;
    final OtpStorage otpStorage;

    @PostMapping("/send")
    public ResponseEntity<String> sendOtp(@RequestParam String email) {
        String otp = OtpUtil.generateOtp(6);
        otpStorage.saveOtp(email, otp);
            emailService.sendOtpEmail(email, otp);
        return ResponseEntity.ok("OTP sent to " + email);
    }

    @PostMapping("/verify")
    public ResponseEntity<String> verifyOtp(@RequestParam String email, @RequestParam String otp) {
        boolean valid = otpStorage.validateOtp(email, otp);
        if (valid) {
            return ResponseEntity.ok("OTP is valid");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid or expired OTP");
        }
    }
}

