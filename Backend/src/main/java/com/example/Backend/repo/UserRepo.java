package com.example.Backend.repo;

import com.example.Backend.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<UserModel,Integer> {
}
