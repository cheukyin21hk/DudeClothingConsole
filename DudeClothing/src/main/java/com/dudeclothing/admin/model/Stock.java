package com.dudeclothing.admin.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The persistent class for the stock database table.
 * 
 */
@Entity
@NamedQuery(name = "Stock.findAll", query = "SELECT s FROM Stock s")
public class Stock implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int stockId;

	private String name;

	private String size;
	
	public Character getSold() {
		return sold;
	}

	public void setSold(Character sold) {
		this.sold = sold;
	}

	private Character sold;

	// bi-directional many-to-one association to Brand
	@ManyToOne
	@JoinColumn(name = "brandId")
	private Brand brand;

	// bi-directional many-to-one association to Purchase
	@ManyToOne
	@JoinColumn(name = "purchaseId")
	private Purchase purchase;

	public Stock() {
	}

	public int getStockId() {
		return this.stockId;
	}

	public void setStockId(int stockId) {
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


	public Brand getBrand() {
		return this.brand;
	}

	public void setBrand(Brand brand) {
		this.brand = brand;
	}

	public Purchase getPurchase() {
		return this.purchase;
	}

	public void setPurchase(Purchase purchase) {
		this.purchase = purchase;
	}

}