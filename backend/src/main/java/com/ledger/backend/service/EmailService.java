package com.ledger.backend.service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Slf4j
public class EmailService {
    final JavaMailSender mailSender;
    @Value("${spring.mail.username}")
    String fromEmail;

    public void sendOtpEmail(String to, String otp) {
        try{
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(to);
            message.setSubject("Your OTP Code");
            message.setText("Your OTP is: " + otp + ". It is valid for 5 minutes.");
            mailSender.send(message);

        }catch(Exception e){
            log.error("Exception while send email ", e);
        }
    }
}
