package com.dudeclothing.admin.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

/**
 * The persistent class for the account database table.
 * 
 */
@Entity
public class Account {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int accountId;

	private String name;

	// bi-directional many-to-one association to Order
	@OneToMany(mappedBy = "account")
	private List<Order> orders;

	public Account() {
	}

	public Account(String name) {
		this.name = name;
	}

	public int getAccountId() {
		return this.accountId;
	}

	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Order> getOrders() {
		return this.orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}

	public Order addOrder(Order order) {
		getOrders().add(order);
		order.setAccount(this);

		return order;
	}

	public Order removeOrder(Order order) {
		getOrders().remove(order);
		order.setAccount(null);

		return order;
	}

}