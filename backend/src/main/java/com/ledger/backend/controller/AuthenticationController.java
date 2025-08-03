package com.ledger.backend.controller;

import com.ledger.backend.model.User;
import com.ledger.backend.security.JwtService;
import com.ledger.backend.security.UserDetailsImpl;
import com.ledger.backend.service.AuthenticationService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AuthenticationController {
    final AuthenticationService authenticationService;
    final JwtService jwtService;
    @PostMapping("/login")
    public ResponseEntity<String> authenticate(User user){
        User authenticatedUser=authenticationService.authenticate(user);
        String jwtToken=jwtService.generateToken(new UserDetailsImpl(authenticatedUser));
        return new ResponseEntity<>(jwtToken, HttpStatus.OK);
    }
}
