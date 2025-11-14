package com.aimoassignment.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.aimoassignment.entities.User;
import com.aimoassignment.services.UserService;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
        System.out.println("UserController initialized");
    }

    @GetMapping("/api/users-with-pet")
    public List<User> getUsersWithPet(
        @RequestParam Optional<Integer> results,
        @RequestParam Optional<String> nat
    ){
        // Validate results parameter - max 5000 allowed
        if (results.isPresent() && results.get() > 5000) {
            throw new ResponseStatusException(
                HttpStatus.BAD_REQUEST, 
                "Results parameter cannot exceed 5000"
            );
        }
        
        return this.userService.getUsersWithPet(results, nat);
    }
    
}
