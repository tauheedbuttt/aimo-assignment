package com.aimoassignment.entities;

import java.util.List;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Getter
public class RandomUserResponse {
    private List<RandomUser> results;
    private Info info;


    // Nested classes
    @Data
    @NoArgsConstructor
    public static class Info {
        private String seed;
        private Integer results;
        private Integer page;
        private String version;
    }
}
