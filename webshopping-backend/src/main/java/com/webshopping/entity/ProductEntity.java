package com.webshopping.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Products")
public class ProductEntity {
	@Id
	private String id;
	
	@NotNull
	@NotEmpty
	private int amount;
	
	@NotNull
	@NotEmpty
	private int price;

	public ProductEntity() {};
	
	public ProductEntity(String  id, @NotNull @NotEmpty int amount, @NotNull @NotEmpty int price) {
		super();
		this.id = id;
		this.amount = amount;
		this.price = price;
	}


	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}
	
	
}
