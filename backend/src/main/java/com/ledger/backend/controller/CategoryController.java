package com.ledger.backend.controller;


import com.ledger.backend.dto.ApiResponse;
import com.ledger.backend.model.Category;
import com.ledger.backend.service.CategoryService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/{userId}/categories")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CategoryController {
    final CategoryService categoryService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<Category>>> getAllCategoriesForUser(@PathVariable String userId) {
        List<Category> categories = categoryService.getAllCategories(userId);
        return new ResponseEntity<>(new ApiResponse<>(true, "categories fetched successfully", categories), HttpStatus.OK);
    }
}
