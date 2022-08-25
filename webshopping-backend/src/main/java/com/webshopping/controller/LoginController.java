package com.webshopping.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webshopping.data.UserData;
import com.webshopping.repo.UserRepository;

@RestController
@RequestMapping("/")
@CrossOrigin("http://localhost:3000/")
public class LoginController {
	
	@Autowired
	UserRepository userpository;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody UserData userData) {
		if(userpository.findByUsername(userData.getUsername()) != null ) return ResponseEntity.ok("found user name");
		else return ResponseEntity.ok("not found user name");
	}
}
