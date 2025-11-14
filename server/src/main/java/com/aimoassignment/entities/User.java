
package com.aimoassignment.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class User {
    private final String id;
    private final String gender;
    private final String country;
    private final String name;
    private final String email;
    private final Dob dob;
    private final String phone;
    private final String petImage;
}
