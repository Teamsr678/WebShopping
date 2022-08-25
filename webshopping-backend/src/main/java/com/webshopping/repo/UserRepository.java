package com.webshopping.repo;

import org.springframework.data.jpa.repository.JpaRepository;


import com.webshopping.data.UserData;
import com.webshopping.entity.UserEntity;


public interface UserRepository extends JpaRepository<UserEntity, Long> {
	public UserEntity findByEmail(String email);
	public UserEntity findByUsername(String username);
	public Boolean existsByUsername(String username);
	public Boolean existsByEmail(String email);
}	
