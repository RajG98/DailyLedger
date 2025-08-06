package com.ledger.backend.util;

import java.util.Random;

public class OtpUtil {
    public static String generateOtp(int length) {
        String digits = "0123456789";
        StringBuilder otp = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < length; i++) {
            otp.append(digits.charAt(random.nextInt(digits.length())));
        }
        return otp.toString();
    }
}
