package com.ledger.backend.controller;


import com.ledger.backend.dto.ApiResponse;
import com.ledger.backend.model.Category;
import com.ledger.backend.service.CategoryService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{categoryId}")
    public ResponseEntity<ApiResponse<Category>> getTransactionById(
            @PathVariable String userId,
            @PathVariable String categoryId
    ) {
        Category category = categoryService.getCategoryById(userId, categoryId);

        return new ResponseEntity<>(new ApiResponse<>(true, "Category found", category), HttpStatus.OK);
    }

    @DeleteMapping("/{categoryId}")
    public ResponseEntity<ApiResponse<Category>> deleteTransactionById(@PathVariable String userId, @PathVariable String categoryId) {
        categoryService.deleteCategoryForUser(userId, categoryId);
        return new ResponseEntity<>(new ApiResponse<>(true, "transaction deleted", null), HttpStatus.NO_CONTENT);
    }

}
