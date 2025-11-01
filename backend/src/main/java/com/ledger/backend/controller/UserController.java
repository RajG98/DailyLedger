package com.ledger.backend.controller;

import com.ledger.backend.dto.ApiResponse;
import com.ledger.backend.dto.TransactionResponse;
import com.ledger.backend.model.Transaction;
import com.ledger.backend.model.User;
import com.ledger.backend.service.UserService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/{userId}")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserController {

    final UserService userService;

    @GetMapping
    public ResponseEntity<ApiResponse<User>> getUserById(
            @PathVariable String userId
    ) {
        User user= userService.findById(userId);
        return new ResponseEntity<>(new ApiResponse<>(true, "user found", user), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<ApiResponse<User>> updateUser(
            @PathVariable String userId,

            @RequestBody User updatedUser) {
        User user = userService.updateUser(userId, updatedUser);
        return new ResponseEntity<>(new ApiResponse<>(true, "user updated", user), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<ApiResponse<User>> deleteUserById(@PathVariable String userId) {
        User user = userService.findById(userId);
        if (user != null) userService.deleteUser(userId);
        return new ResponseEntity<>(new ApiResponse<>(true, "user deleted", null), HttpStatus.NO_CONTENT);
    }

}
