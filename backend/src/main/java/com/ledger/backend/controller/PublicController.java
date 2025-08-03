package com.ledger.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PublicController {
    @GetMapping("/")
    public ResponseEntity<String> healthCheck(){
        return new ResponseEntity<>("Health Check succeeded", HttpStatus.OK);
    }
}
