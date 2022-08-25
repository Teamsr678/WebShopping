package com.webshopping.data;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import java.io.Serializable;

public class UserData implements Serializable {
	
	@NotNull
	@NotEmpty
	private String username;
	
	@NotNull
	@NotEmpty
	@Email
	private String email;
	
	@NotNull
	@NotEmpty
	@Size(min=6)
	private String password;

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

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
    
    
}
