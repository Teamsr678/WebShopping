package com.webshopping.services;

import com.webshopping.data.UserData;

public interface UserService {
    void register(final UserData userData) throws Exception;
    boolean checkIfEmailExist(final String email);
    boolean checkIfUsernameExist(final String username);
}
