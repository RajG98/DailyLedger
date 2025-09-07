package com.ledger.backend.controller;

import com.ledger.backend.dto.ApiResponse;
import com.ledger.backend.dto.JwtResponse;
import com.ledger.backend.dto.LoginUser;
import com.ledger.backend.dto.RegisterUser;
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
    public ResponseEntity<ApiResponse<JwtResponse>> authenticate(@RequestBody LoginUser user) {
        User authenticatedUser = authenticationService.authenticate(user);
        String jwtToken = jwtService.generateToken(authenticatedUser);
        JwtResponse response = new JwtResponse().setToken(jwtToken).setExpiresIn(jwtService.getExpirationTime());
        return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse<>(true,"JWT token generated",response));
    }
    @PostMapping("/signup")
    public ResponseEntity<ApiResponse<?>> signup(@RequestBody RegisterUser user){
        if (authenticationService.accountExists(user.getEmail())) {
            return ResponseEntity.status(HttpStatus.CONFLICT) // 409 Conflict
                    .body(new ApiResponse<>(false,"Email already exists" , "An account with this email already exists."));
        }
        User registeredUser= authenticationService.signup(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse<>(true,"User fetched successfully",registeredUser));
    }

}
