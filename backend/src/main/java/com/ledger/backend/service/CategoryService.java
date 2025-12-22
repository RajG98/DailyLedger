package com.ledger.backend.service;

import com.ledger.backend.exception.CategoryNotFoundException;
import com.ledger.backend.model.Category;
import com.ledger.backend.model.User;
import com.ledger.backend.repository.CategoryRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CategoryService {
    final CategoryRepo categoryRepo;
    final UserService userService;

    public Category addCategory(Category cat, String userId) {
        User user = userService.findById(userId);
        cat.setUser(user);
        return categoryRepo.save(cat);
    }

    public Category getCategoryById(String userId, String categoryId) {
        return categoryRepo.findByIdAndUserId(categoryId, userId).orElseThrow(() -> new CategoryNotFoundException(categoryId));
    }


    public List<Category> getAllCategories(String userId) {
        return categoryRepo.findAllByUserId(userId);
    }

    public void deleteCategoryForUser(String userId, String categoryId) {
        Category category = categoryRepo.findByIdAndUserId(categoryId, userId).orElseThrow(() -> new CategoryNotFoundException(categoryId));
        categoryRepo.delete(category);
    }
}
