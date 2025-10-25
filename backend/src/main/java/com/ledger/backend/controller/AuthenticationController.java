package com.ledger.backend.controller;

import com.ledger.backend.dto.*;
import com.ledger.backend.model.User;
import com.ledger.backend.security.JwtService;
import com.ledger.backend.service.AuthenticationService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<ApiResponse<LoginResponse>> authenticate(@RequestBody LoginUser user) {
        User authenticatedUser = authenticationService.authenticate(user);
        String jwtToken = jwtService.generateToken(authenticatedUser);
        JwtResponse jwt = new JwtResponse().setToken(jwtToken).setExpiresIn(jwtService.getExpirationTime());

        return ResponseEntity.status(HttpStatus.OK)
                .body(new ApiResponse<>(true, "JWT token generated",
                        new LoginResponse(jwt, String.valueOf(authenticatedUser.getId()), authenticatedUser.getName(),
                                authenticatedUser.getEmail())));
    }
    @PostMapping("/signup")
    public ResponseEntity<ApiResponse<User>> signup(@RequestBody RegisterUser user){
        if (authenticationService.accountExists(user.getEmail())) {
            return ResponseEntity.status(HttpStatus.CONFLICT) // 409 Conflict
                    .body(new ApiResponse<>(false,"An account with this email already exists." , null));
        }
        User registeredUser= authenticationService.signup(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse<>(true, "User created successfully", registeredUser));
    }
    @PutMapping("/reset-password")
    public ResponseEntity<ApiResponse<User>> resetPassword(@RequestBody ResetPassword request) {
        authenticationService.resetPassword(request);
        return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse<>(true,"Password changed successfully",null));
    }


}