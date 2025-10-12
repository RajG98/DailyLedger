package com.ledger.backend.util;

import java.util.Random;

public class OtpUtil {
    private static final Random random = new Random();
    public static String generateOtp(int length) {
        String digits = "0123456789";
        StringBuilder otp = new StringBuilder();
        for (int i = 0; i < length; i++) {
            otp.append(digits.charAt(random.nextInt(digits.length())));
        }
        return otp.toString();
    }

    private OtpUtil() {
    }
}
