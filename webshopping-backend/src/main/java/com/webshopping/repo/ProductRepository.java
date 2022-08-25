package com.webshopping.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webshopping.entity.ProductEntity;

public interface ProductRepository extends JpaRepository<ProductEntity, String> {

}
