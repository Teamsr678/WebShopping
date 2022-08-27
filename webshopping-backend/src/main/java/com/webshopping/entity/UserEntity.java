package com.webshopping.entity;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


import org.hibernate.validator.constraints.Email;
import org.springframework.boot.autoconfigure.domain.EntityScan;


@Entity
@Table(name = "Users")
public class UserEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(unique = true)
	@NotNull
	@NotEmpty
	@Size(min=4)
	private String username;
	
	@Column(unique = true)
	@NotNull
	@NotEmpty
	@Email
	private String email;
	
	@Column
	@NotNull
	@NotEmpty
	@Size(min=6)
	private String password;
	
	public UserEntity() {};
	
	public UserEntity(long id,String username, String email, String password){
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
	}
	
	public UserEntity(String username, String email, String password){
		this.username = username;
		this.email = email;
		this.password = password;
	}
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

}
