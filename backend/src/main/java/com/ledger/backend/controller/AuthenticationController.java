package com.ledger.backend.controller;

import com.ledger.backend.dto.JwtResponse;
import com.ledger.backend.dto.LoginUser;
import com.ledger.backend.model.User;
import com.ledger.backend.security.JwtService;
import com.ledger.backend.service.AuthenticationService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AuthenticationController {
    final AuthenticationService authenticationService;
    final JwtService jwtService;
    @PostMapping("/login")
    public ResponseEntity<JwtResponse> authenticate(@RequestBody LoginUser user){
        User authenticatedUser=authenticationService.authenticate(user);
        String jwtToken=jwtService.generateToken(authenticatedUser);
        JwtResponse response=new JwtResponse().setToken(jwtToken).setExpiresIn(jwtService.getExpirationTime());
        return ResponseEntity.ok(response);
    }
    @GetMapping("/login")
    public String res(){
        return "Hii";
    }
//
//    public ResponseEntity<String> login (){
//
//    }
}
