package com.dudeclothing.admin.model;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * The persistent class for the brand database table.
 * 
 */
@Entity
public class Brand {

	@Id
	private int brandId;

	private String name;

	public Brand() {
	}

	public int getBrandId() {
		return this.brandId;
	}

	public void setBrandId(int brandId) {
		this.brandId = brandId;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

}