package com.ledger.backend.service;

import com.ledger.backend.dto.UserRequest;
import com.ledger.backend.exception.UserNotFoundException;
import com.ledger.backend.model.User;
import com.ledger.backend.repository.UserRepo;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserService {
    final UserRepo userRepo;
    public User findById(String userId) {
        return userRepo.findById(userId).orElseThrow(()->new UserNotFoundException(userId));
    }

    public User updateUser(String userId, UserRequest updatedUser) {
        User user = userRepo.findById(userId).orElseThrow(()->new UserNotFoundException(userId));
        user.setName(updatedUser.getName());
        user.setEmail(updatedUser.getEmail());
        user.setPassword(updatedUser.getPassword());
        return userRepo.save(user);
    }

    public void deleteUser(String userId) {
        User user=userRepo.findById(userId).orElseThrow(()->new UserNotFoundException(userId));
        userRepo.delete(user);
    }
}
