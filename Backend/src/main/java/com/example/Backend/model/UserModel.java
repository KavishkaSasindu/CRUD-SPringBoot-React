package com.example.Backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@Entity
@Component
@AllArgsConstructor
@NoArgsConstructor
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    @Column(unique=true)
    private int profileId;
    private String profileName;
    private String profileEmail;
    private String job;
    private String birthday;
    private String gender;

    private String imageName;
    private String imageType;
    @Lob
    private byte[] imageData;
}
