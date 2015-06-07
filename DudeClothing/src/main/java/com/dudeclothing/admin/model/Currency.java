package com.dudeclothing.admin.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * The persistent class for the currency database table.
 * 
 */
@Entity
@Table(name = "currency")
public class Currency {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int currencyId;

	private String name;

	private float rate;

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

}