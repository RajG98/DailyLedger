package com.ledger.backend.controller;

import com.ledger.backend.dto.ApiResponse;
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
    public ResponseEntity<ApiResponse<String>> sendOtp(@RequestParam String email) {
        String otp = OtpUtil.generateOtp(6);
        otpStorage.saveOtp(email, otp);
        boolean response=emailService.sendOtpEmail(email, otp);
        if(!response)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse<>(false,"Send OTP Failed","Failed to send otp to: "+ email));
        return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse<>(true,"OTP sent successfully","OTP sent to " + email));
    }

    @PostMapping("/verify")
    public ResponseEntity<ApiResponse<String>> verifyOtp(@RequestParam String email, @RequestParam String otp) {
        boolean valid = otpStorage.validateOtp(email, otp);
        if (valid) {
            return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse<>(true,"Valid OTP","OTP is valid"));

        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse<>(false,"Invalid OTP","Invalid or expired OTP"));

        }
    }
}

