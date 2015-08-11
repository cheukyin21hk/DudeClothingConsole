package com.dudeclothing.admin.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * The persistent class for the purchase_shipment database table.
 * 
 */
@Entity
@Table(name = "purchase_shipment")
public class PurchaseShipment {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private String shipmentCode;

	@ManyToOne
	@JoinColumn(name = "purchase_id")
	private PurchaseOrder purchase;

	@Column(name = "local_shipping_cost")
	private float localShippingCost;

	@ManyToOne
	@JoinColumn(name = "status_id")
	private Status status;

	public PurchaseShipment() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getShipmentCode() {
		return shipmentCode;
	}

	public void setShipmentCode(String shipmentCode) {
		this.shipmentCode = shipmentCode;
	}

	public float getLocalShippingCost() {
		return localShippingCost;
	}

	public void setLocalShippingCost(float localShippingCost) {
		this.localShippingCost = localShippingCost;
	}

	public PurchaseOrder getPurchase() {
		return purchase;
	}

	public void setPurchase(PurchaseOrder purchase) {
		this.purchase = purchase;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

}