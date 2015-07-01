package com.dudeclothing.admin.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * The persistent class for the order database table.
 * 
 */
@Entity
public class OrderRecord {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long orderRecordId;
	private float deposit;
	private Date depositeDate;
	private Date orderRecordDate;
	private float price;

	@ManyToOne
	@JoinColumn(name = "accountId")
	private Account account;

	@ManyToOne
	@JoinColumn(name = "statusId")
	private Status status;

	@ManyToOne
	@JoinColumn(name = "clientId")
	private Client client;

	@ManyToOne
	@JoinColumn(name = "stockId")
	private Stock stock;

	public OrderRecord() {
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public Client getClient() {
		return this.client;
	}

	public void setClient(Client client) {
		this.client = client;
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

	public long getOrderRecordId() {
		return orderRecordId;
	}

	public void setOrderRecordId(long orderRecordId) {
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

	public Stock getStock() {
		return this.stock;
	}

	public void setStock(Stock stock) {
		this.stock = stock;
	}

}