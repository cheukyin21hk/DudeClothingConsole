package com.dudeclothing.admin.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the brand database table.
 * 
 */
@Entity
@NamedQuery(name="Brand.findAll", query="SELECT b FROM Brand b")
public class Brand implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int brandId;

	private String name;

	//bi-directional many-to-one association to Item
	@OneToMany(mappedBy="brand")
	private List<Item> items;

	//bi-directional many-to-one association to Stock
	@OneToMany(mappedBy="brand")
	private List<Stock> stocks;

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

	public List<Item> getItems() {
		return this.items;
	}

	public void setItems(List<Item> items) {
		this.items = items;
	}

	public Item addItem(Item item) {
		getItems().add(item);
		item.setBrand(this);

		return item;
	}

	public Item removeItem(Item item) {
		getItems().remove(item);
		item.setBrand(null);

		return item;
	}

	public List<Stock> getStocks() {
		return this.stocks;
	}

	public void setStocks(List<Stock> stocks) {
		this.stocks = stocks;
	}

	public Stock addStock(Stock stock) {
		getStocks().add(stock);
		stock.setBrand(this);

		return stock;
	}

	public Stock removeStock(Stock stock) {
		getStocks().remove(stock);
		stock.setBrand(null);

		return stock;
	}

}