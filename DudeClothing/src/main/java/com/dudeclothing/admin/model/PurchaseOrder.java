package com.dudeclothing.admin.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * The persistent class for the purchase_orders database table.
 * 
 */
@Entity
@Table(name = "purchase_order")
public class PurchaseOrder {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@ManyToOne
	@JoinColumn(name = "currency_id")
	private Currency currency;

	@Column(name = "foreign_ship_cost")
	private float foreignShipCost;

	@Temporal(TemporalType.DATE)
	@Column(name = "purchase_date")
	private Date purchaseDate;

	public PurchaseOrder() {
	}

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Currency getCurrency() {
		return this.currency;
	}

	public void setCurrency(Currency currency) {
		this.currency = currency;
	}

	public float getForeignShipCost() {
		return this.foreignShipCost;
	}

	public void setForeignShipCost(float foreignShipCost) {
		this.foreignShipCost = foreignShipCost;
	}

	public Date getPurchaseDate() {
		return this.purchaseDate;
	}

	public void setPurchaseDate(Date purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

}