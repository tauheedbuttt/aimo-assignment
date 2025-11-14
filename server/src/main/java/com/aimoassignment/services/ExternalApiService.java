package com.aimoassignment.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.aimoassignment.entities.DogImage;
import com.aimoassignment.entities.RandomUser;
import com.aimoassignment.entities.RandomUserResponse;
import com.aimoassignment.exceptions.ApiException;

@Component
public class ExternalApiService {
    public List<RandomUser> fetchRandomUsers(Optional<Integer> resultsOpt, Optional<String> natOpt, Optional<Integer> seedOpt){
        String seed = (seedOpt != null && seedOpt.isPresent()) ? seedOpt.get().toString() : "";
        String results = (resultsOpt != null && resultsOpt.isPresent()) ? resultsOpt.get().toString() : "";
        String nat = (natOpt != null && natOpt.isPresent()) ? natOpt.get() : "";
        
        final String uri = "https://randomuser.me/api?seed=" + seed + "&results=" + results + "&nat=" + nat;

        System.out.println("Fetching Random Users from URI: " + uri);

        try {
            RestTemplate restTemplate = new RestTemplate();
            RandomUserResponse result = restTemplate.getForObject(uri, RandomUserResponse.class);
    
            List<RandomUser> users = result != null ? result.getResults() : List.<RandomUser>of();
    
            return users;
        } catch (Exception e) {
            System.err.println("Error fetching users: " + e.getMessage());
            throw new ApiException("Users could not be loaded");
        }

    }

    public List<String> fetchRandomPetImages(Integer count){
        count = count > 50 ? 50 : count; // Dog API allows max 50 images per request
        final String uri = "https://dog.ceo/api/breeds/image/random/" + (count == 0 ? "" : count);

        try {
            RestTemplate restTemplate = new RestTemplate();
            DogImage result = restTemplate.getForObject(uri, DogImage.class);
    
            List<String> images = result != null ? result.getMessage() : List.<String>of();
    
            return images;
        } catch (Exception e) {
            System.err.println("Error fetching pet images: " + e.getMessage());
            throw new ApiException("Pet images could not be loaded");
        }
    }
}
