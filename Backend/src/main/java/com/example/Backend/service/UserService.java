package com.example.Backend.service;

import com.example.Backend.model.UserModel;
import com.example.Backend.repo.UserRepo;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Data
@Service
@NoArgsConstructor
public class UserService {

    private UserRepo userRepo;

    @Autowired
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

//    method to create data
    public UserModel addUser(UserModel user, MultipartFile image) throws IOException {
        Optional<UserModel> userModel = userRepo.findById(user.getId());

        if(userModel.isEmpty()) {
            user.setImageName(image.getOriginalFilename());
            user.setImageType(image.getContentType());
            user.setImageData(image.getBytes());
            return userRepo.save(user);
        }
        return null;
    }

//    method to get one user
    public UserModel getUserById(int id) {
        Optional<UserModel> userModel = userRepo.findById(id);

        return userModel.orElse(null);

    }

//    get all user data
    public List<UserModel> allUsers() {
        return userRepo.findAll();
    }

}
