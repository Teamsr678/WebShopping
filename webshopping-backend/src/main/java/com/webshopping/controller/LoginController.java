package com.webshopping.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webshopping.data.JwtResponse;
import com.webshopping.data.UserData;
import com.webshopping.entity.UserEntity;
import com.webshopping.repo.UserRepository;
import com.webshopping.security.jwt.JwtUtils;
import com.webshopping.services.impl.UserDetailsImpl;

@RestController
@RequestMapping("/")
@CrossOrigin("http://localhost:3000/")
public class LoginController {
	
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;
	
    @PostMapping("/login")
    public ResponseEntity<?> authenticateuser
               (@RequestBody UserData userData) {

        Authentication authentication = authenticationManager
              .authenticate
                 (new UsernamePasswordAuthenticationToken
                        (userData.getUsername(), 
                        		userData.getPassword()));

        SecurityContextHolder.getContext()
               .setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) 
                              authentication.getPrincipal();

        return ResponseEntity
                .ok(new JwtResponse(jwt, userDetails.getId(),
                   userDetails.getUsername(), 
                            userDetails.getEmail()));
    }
    
    @PostMapping("/register")
    public ResponseEntity<?> registerUser
                  (@RequestBody UserData userData) {

        if (userRepository.existsByUsername(userData
              .getUsername())) {

            return ResponseEntity.badRequest()
                .body(new MessageResponse
                  ("Error: username is already taken!"));
        }

        if (userRepository.existsByEmail
                           (userData.getEmail())) {

            return ResponseEntity.badRequest()
                 .body(new MessageResponse
                        ("Error: Email is already in use!"));
        }

        // Create new user account
        UserEntity user = new UserEntity(userData.getUsername(), 
        		userData.getEmail(),
                encoder.encode(userData.getPassword()));

        userRepository.save(user);

        return ResponseEntity
         .ok(new MessageResponse("user registered successfully!"));
    }
}
