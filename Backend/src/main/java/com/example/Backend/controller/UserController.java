package com.example.Backend.controller;

import com.example.Backend.model.UserModel;
import com.example.Backend.repo.UserRepo;
import com.example.Backend.service.UserService;
import lombok.Data;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Data
@RestController
@CrossOrigin(origins = "http://localhost:5173/")
@RequestMapping("/api/v1")
public class UserController {

    private final UserRepo userRepo;
    private UserService userService;

    @Autowired
    public UserController(UserService userService, UserRepo userRepo) {
        this.userService = userService;
        this.userRepo = userRepo;
    }

//    add user to the db
    @PostMapping("/create")
    public ResponseEntity<?> addUserDb(@RequestPart UserModel userModel, @RequestPart MultipartFile image) throws IOException {

        if(userModel == null) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("User Model is Null");
        }
        if(image == null) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Image is Null");
        }

        return ResponseEntity.status(HttpStatus.OK).body(userService.addUser(userModel,image));
    }

//    get One user
    @GetMapping("/user/{id}")
    public ResponseEntity<?> getOneUser(@PathVariable int id) {
        if(id <= 0 ){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("id is null");
        }

        return ResponseEntity.status(HttpStatus.FOUND).body(userService.getUserById(id));
    }

//get one image by user id
    @GetMapping("/user/image/{id}")
    public ResponseEntity<?> getUserImage(@PathVariable int id) {

        UserModel userModel = userService.getUserById(id);

        if(id <= 0 ){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("id is null");
        } else if (userModel == null) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No User was found");
        }

        return ResponseEntity.status(HttpStatus.FOUND).body(userModel.getImageData());
    }

//    get all users
    @GetMapping("/getAll")
    public ResponseEntity<?> getAllUsers() {
        List<UserModel> userModels = userService.allUsers();

        if(userModels.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No User was found");
        }

        return ResponseEntity.status(HttpStatus.OK).body(userModels);
    }

}
