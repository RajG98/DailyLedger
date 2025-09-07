package com.ledger.backend.exception;

import com.ledger.backend.dto.ApiResponse;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AccountStatusException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;



@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse<Object>> handleException(Exception exception) {
        exception.printStackTrace(); // TODO: send this stack trace to an observability tool

        ApiResponse<Object> response;
        HttpStatus status;

        if (exception instanceof BadCredentialsException) {
            status = HttpStatus.UNAUTHORIZED;
            response = new ApiResponse<>(false, "The username or password is incorrect", exception.getMessage());
        } else if (exception instanceof AccountStatusException) {
            status = HttpStatus.FORBIDDEN;
            response = new ApiResponse<>(false, "The account is locked", exception.getMessage());
        } else if (exception instanceof AccessDeniedException) {
            status = HttpStatus.FORBIDDEN;
            response = new ApiResponse<>(false, "You are not authorized to access this resource", exception.getMessage());
        } else if (exception instanceof SignatureException) {
            status = HttpStatus.FORBIDDEN;
            response = new ApiResponse<>(false, "The JWT signature is invalid", exception.getMessage());
        } else if (exception instanceof ExpiredJwtException) {
            status = HttpStatus.FORBIDDEN;
            response = new ApiResponse<>(false, "The JWT token has expired", exception.getMessage());
        } else {
            status = HttpStatus.INTERNAL_SERVER_ERROR;
            response = new ApiResponse<>(false, "Unknown internal server error.", exception.getMessage());
        }

        return ResponseEntity.status(status).body(response);
    }
}
