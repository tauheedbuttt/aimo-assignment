package com.aimoassignment.entities;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DogImage {
    private final List<String> message;
    private final String status;
}
