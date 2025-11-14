package com.aimoassignment.entities;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Getter
public class RandomUser {
    private Id id;
    private String gender;
    private String nat;
    private String email;
    private Name name;
    private Dob dob;
    private String phone;

    @Data
    @NoArgsConstructor
    public static class Id {
        private String value;
    }

    // Nested classes
    @Data
    @NoArgsConstructor
    public static class Name {
        private String first;
        private String last;
    }
}
