package com.dudeclothing.admin.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * The persistent class for the order database table.
 * 
 */
@Entity
public class OrderRecord {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int orderRecordId;

	private int accountId;

	private int statusId;

	private int clientId;

	private float deposit;

	private Date depositeDate;

	private Date orderRecordDate;

	private float price;

	private int stockId;

	public OrderRecord() {
	}

	public int getAccountId() {
		return accountId;
	}

	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}

	public int getStatusId() {
		return statusId;
	}

	public void setStatusId(int statusId) {
		this.statusId = statusId;
	}

	public int getClientId() {
		return this.clientId;
	}

	public void setClientId(int clientId) {
		this.clientId = clientId;
	}

	public float getDeposit() {
		return this.deposit;
	}

	public void setDeposit(float deposit) {
		this.deposit = deposit;
	}

	public Date getDepositeDate() {
		return this.depositeDate;
	}

	public void setDepositeDate(Date depositeDate) {
		this.depositeDate = depositeDate;
	}

	public int getOrderRecordId() {
		return orderRecordId;
	}

	public void setOrderRecordId(int orderRecordId) {
		this.orderRecordId = orderRecordId;
	}

	public Date getOrderRecordDate() {
		return orderRecordDate;
	}

	public void setOrderRecordDate(Date orderRecordDate) {
		this.orderRecordDate = orderRecordDate;
	}

	public float getPrice() {
		return this.price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getStockId() {
		return this.stockId;
	}

	public void setStockId(int stockId) {
		this.stockId = stockId;
	}

}