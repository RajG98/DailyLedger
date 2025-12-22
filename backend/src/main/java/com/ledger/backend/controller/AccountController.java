package com.ledger.backend.controller;

import com.ledger.backend.dto.AccountRequest;
import com.ledger.backend.dto.ApiResponse;
import com.ledger.backend.model.Account;
import com.ledger.backend.service.AccountService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/{userId}/accounts")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AccountController {
    final AccountService accountService;
    @GetMapping
    public ResponseEntity<ApiResponse<List<Account>>> getAllAccounts(@PathVariable String userId){
        List<Account> accounts= accountService.getAccounts(userId);
        return new ResponseEntity<>(new ApiResponse<>(true,"accounts fetched successfully",accounts), HttpStatus.OK);
    }
    @GetMapping("/{accountId}")
    public ResponseEntity<ApiResponse<Account>> getAccountIdForUser(
            @PathVariable String userId,
            @PathVariable String accountId
    ) {
        Account account = accountService.getAccountByIdForUser(userId, accountId);

        return new ResponseEntity<>(new ApiResponse<>(true, "account found", account), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<ApiResponse<Account>> createAccount(@PathVariable String userId, @RequestBody AccountRequest request) {
        Account created= accountService.createAccount(userId,request);
        return new ResponseEntity<>(new ApiResponse<>(true, "account saved", created), HttpStatus.CREATED);
    }

    @PutMapping("/{accountId}")
    public ResponseEntity<ApiResponse<Account>> updateAccountById(
            @PathVariable String userId,
            @PathVariable String accountId,
            @RequestBody AccountRequest updatedAccount) {
        Account account = accountService.updateAccountForUser(userId, accountId, updatedAccount);
        return new ResponseEntity<>(new ApiResponse<>(true, "transaction updated", account), HttpStatus.OK);
    }

    @DeleteMapping("/{accountId}")
    public ResponseEntity<ApiResponse<Account>> deleteAccountById(@PathVariable String userId, @PathVariable String accountId) {
        accountService.deleteAccountForUser(userId, accountId);
        return new ResponseEntity<>(new ApiResponse<>(true, "account deleted", null), HttpStatus.NO_CONTENT);
    }
}

