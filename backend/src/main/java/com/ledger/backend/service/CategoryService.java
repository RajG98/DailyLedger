package com.ledger.backend.service;

import com.ledger.backend.model.Category;
import com.ledger.backend.repository.CategoryRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CategoryService {
    final CategoryRepo categoryRepo;

    public Category addCategory(Category cat) {
        return categoryRepo.save(cat);
    }
}
