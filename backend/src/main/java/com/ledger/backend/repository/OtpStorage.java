package com.ledger.backend.repository;

import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class OtpStorage {
    private final Map<String, OtpEntry> otpMap = new ConcurrentHashMap<>();

    public void saveOtp(String email, String otp) {
        otpMap.put(email, new OtpEntry(otp, System.currentTimeMillis()));
    }

    public boolean validateOtp(String email, String otp) {
        OtpEntry entry = otpMap.get(email);
        if (entry == null) return false;
        long currentTime = System.currentTimeMillis();
        // OTP is valid for 5 minutes
        if ((currentTime - entry.timestamp) > 5 * 60 * 1000) {
            otpMap.remove(email);
            return false;
        }
        return entry.otp.equals(otp);
    }

    static class OtpEntry {
        String otp;
        long timestamp;

        OtpEntry(String otp, long timestamp) {
            this.otp = otp;
            this.timestamp = timestamp;
        }
    }
}

