package com.webshopping.services.impl;

import com.webshopping.services.UserService;

import com.webshopping.data.UserData;
import com.webshopping.entity.UserEntity;
import com.webshopping.repo.UserRepository;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service("userService")
public class DefaultUserService implements UserService {
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
    public void register(UserData userData) throws Exception {
		UserEntity userEntity = new UserEntity();
		
		if(checkIfUsernameExist(userData.getUsername())){
            throw new Exception("มีชื่อผู้ใช้นี้ในระบบแล้ว");
        }
		
        if(checkIfEmailExist(userData.getEmail())){
            throw new Exception("มีอีเมลล์นี้ในระบบแล้ว");
        }
    
        BeanUtils.copyProperties(userData, userEntity);
        encodePassword(userEntity, userData);
        userRepository.save(userEntity);
    }
	
	@Override
    public boolean checkIfEmailExist(String email) {
        return userRepository.findByEmail(email) !=null ? true : false;
    }
	
	@Override
	public boolean checkIfUsernameExist(final String username) {
		return userRepository.findByUsername(username) !=null ? true : false;
	}
	
    private void encodePassword(UserEntity userEntity, UserData userData){
        userEntity.setPassword(passwordEncoder.encode(userData.getPassword()));
    }
}


