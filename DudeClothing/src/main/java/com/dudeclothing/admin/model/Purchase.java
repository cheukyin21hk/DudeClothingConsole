package com.dudeclothing.admin.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * The persistent class for the purchase database table.
 * 
 */
@Entity
public class Purchase {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long purchaseId;
	private float currencyPrice;
	private Date date;
	private float foreignShipCost;
	private String invoice;
	private float localShipCost;
	private int logisticCode;
	private int quantity;
	private int trackingNo;

	@ManyToOne
	@JoinColumn(name = "currencyId")
	private Currency currency;

	public Currency getCurrency() {
		return currency;
	}

	public void setCurrency(Currency currency) {
		this.currency = currency;
	}

	public Purchase() {
	}

	public long getPurchaseId() {
		return this.purchaseId;
	}

	public void setPurchaseId(long purchaseId) {
		this.purchaseId = purchaseId;
	}

	public float getCurrencyPrice() {
		return this.currencyPrice;
	}

	public void setCurrencyPrice(float currencyPrice) {
		this.currencyPrice = currencyPrice;
	}

	public Date getDate() {
		return this.date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public float getForeignShipCost() {
		return this.foreignShipCost;
	}

	public void setForeignShipCost(float foreignShipCost) {
		this.foreignShipCost = foreignShipCost;
	}

	public String getInvoice() {
		return this.invoice;
	}

	public void setInvoice(String invoice) {
		this.invoice = invoice;
	}

	public float getLocalShipCost() {
		return this.localShipCost;
	}

	public void setLocalShipCost(float localShipCost) {
		this.localShipCost = localShipCost;
	}

	public int getLogisticCode() {
		return this.logisticCode;
	}

	public void setLogisticCode(int logisticCode) {
		this.logisticCode = logisticCode;
	}

	public int getQuantity() {
		return this.quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getTrackingNo() {
		return this.trackingNo;
	}

	public void setTrackingNo(int trackingNo) {
		this.trackingNo = trackingNo;
	}

}