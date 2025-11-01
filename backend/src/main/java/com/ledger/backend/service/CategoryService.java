package com.ledger.backend.service;

import com.ledger.backend.exception.UserNotFoundException;
import com.ledger.backend.model.Category;
import com.ledger.backend.model.User;
import com.ledger.backend.repository.CategoryRepo;
import com.ledger.backend.repository.UserRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

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
}
