package com.dudeclothing.admin.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * The persistent class for the stock database table.
 * 
 */
@Entity
public class Stock {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long stockId;
	private String name;
	private String size;
	private Character sold;

	@ManyToOne
	@JoinColumn(name = "purchaseId")
	private Purchase purchase;

	@ManyToOne
	@JoinColumn(name = "brandId")
	private Brand brand;

	public Stock() {
	}

	public Purchase getPurchase() {
		return purchase;
	}

	public void setPurchase(Purchase purchase) {
		this.purchase = purchase;
	}

	public Brand getBrand() {
		return brand;
	}

	public void setBrand(Brand brand) {
		this.brand = brand;
	}

	public Character getSold() {
		return sold;
	}

	public void setSold(Character sold) {
		this.sold = sold;
	}

	public long getStockId() {
		return this.stockId;
	}

	public void setStockId(long stockId) {
		this.stockId = stockId;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSize() {
		return this.size;
	}

	public void setSize(String size) {
		this.size = size;
	}

}