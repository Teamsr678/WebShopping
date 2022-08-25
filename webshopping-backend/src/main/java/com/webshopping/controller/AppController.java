package com.webshopping.controller;

import java.net.URISyntaxException;



import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


import com.webshopping.data.UserData;
import com.webshopping.entity.ProductEntity;
import com.webshopping.entity.UserEntity;
import com.webshopping.repo.ProductRepository;
import com.webshopping.repo.UserRepository;
import com.webshopping.services.UserService;


@RestController // This means that this class is a Controller
@RequestMapping("/") // This means URL's start with /
@CrossOrigin("http://localhost:3000/")
public class AppController {
	@Autowired 	// This means to get the bean called userRepository
    			// Which is auto-generated by Spring, we will use it to handle the data
	private UserRepository userRepository;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private ProductRepository productRepository;
	
	@PostMapping("/register")
	public String createUser(final @Valid @RequestBody UserData userData) throws Exception {
		try {
			userService.register(userData);
		} catch (Exception e) {
			
			if(e.toString().equals("java.lang.Exception: มีชื่อผู้ใช้นี้ในระบบแล้ว")) 
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.toString().substring(21));
			
			if(e.toString().equals("java.lang.Exception: มีอีเมลล์นี้ในระบบแล้ว")) 
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.toString().substring(21));
		}
		return null;
	}
	
	@GetMapping("/users")
	public List<UserEntity> getUsers() {
		return userRepository.findAll();
	}
	
	@GetMapping("/products_list")
	public List<ProductEntity> view() {
		return productRepository.findAll();
	}
}