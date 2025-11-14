package com.aimoassignment.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.aimoassignment.entities.RandomUser;
import com.aimoassignment.entities.User;

@Service
public class UserService {
    private final ExternalApiService externalApiService;

    public UserService(ExternalApiService externalApiService){
        this.externalApiService = externalApiService;
    }

    public List<User> getUsersWithPet(Optional<Integer> results, Optional<String> nat) {
        List<RandomUser> randomUsers = externalApiService.fetchRandomUsers(results, nat, Optional.empty());
        List<String> dogImages = externalApiService.fetchRandomPetImages(randomUsers.size());

        System.out.println("Fetched Users: " + randomUsers);
        System.out.println("Fetched Dog Images: " + dogImages);

        List<User> userList = new ArrayList<>();

        randomUsers.forEach(user -> {
            String dogImage = dogImages.isEmpty() ? null : dogImages.remove(0);
            User userWithPet = new User(
                user.getId() != null ? user.getId().getValue() : null,
                user.getGender(),
                user.getNat(),
                user.getName().getFirst() + " " + user.getName().getLast(),
                user.getEmail(),
                user.getDob(),
                user.getPhone(),
                dogImage
            );
            userList.add(userWithPet);
        });

        return userList;
    }
        
}
