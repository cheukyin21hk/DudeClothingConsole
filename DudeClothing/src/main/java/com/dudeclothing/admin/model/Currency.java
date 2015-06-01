package com.dudeclothing.admin.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


/**
 * The persistent class for the currency database table.
 * 
 */
@Entity
@Table(name = "currency")
public class Currency {
	private static final long serialVersionUID = 1L;

	@Id
	private int currencyId;

	private String name;

	private float rate;

	//bi-directional many-to-one association to Purchase
	@OneToMany(mappedBy="currency")
	private List<Purchase> purchases;

	public Currency() {
	}

	public int getCurrencyId() {
		return this.currencyId;
	}

	public void setCurrencyId(int currencyId) {
		this.currencyId = currencyId;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float getRate() {
		return this.rate;
	}

	public void setRate(float rate) {
		this.rate = rate;
	}

	public List<Purchase> getPurchases() {
		return this.purchases;
	}

	public void setPurchases(List<Purchase> purchases) {
		this.purchases = purchases;
	}

	public Purchase addPurchas(Purchase purchas) {
		getPurchases().add(purchas);
		purchas.setCurrency(this);

		return purchas;
	}

	public Purchase removePurchas(Purchase purchas) {
		getPurchases().remove(purchas);
		purchas.setCurrency(null);

		return purchas;
	}

}