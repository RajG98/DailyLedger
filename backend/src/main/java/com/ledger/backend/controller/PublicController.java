package com.ledger.backend.controller;

import com.ledger.backend.dto.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PublicController {
    @GetMapping("/")
    public ResponseEntity<ApiResponse< String>> healthCheck(){
        return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse<>(true,"Health Check succeeded",null));
    }
}
