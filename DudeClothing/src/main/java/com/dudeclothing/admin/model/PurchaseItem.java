package com.dudeclothing.admin.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * The persistent class for the purchase_item database table.
 * 
 */
@Entity
@Table(name = "purchase_item")
public class PurchaseItem {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private Character delivered;

	@ManyToOne
	@JoinColumn(name = "item_id")
	private Item item;

	@ManyToOne
	@JoinColumn(name = "shipment_id")
	private PurchaseShipment purchaseShipment;

	private String size;

	private float price;

	private int quantity;

	public PurchaseItem() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	}

	public Character getDelivered() {
		return this.delivered;
	}

	public void setDelivered(Character delivered) {
		this.delivered = delivered;
	}

	public float getPrice() {
		return this.price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getQuantity() {
		return this.quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public PurchaseShipment getPurchaseShipment() {
		return purchaseShipment;
	}

	public void setPurchaseShipment(PurchaseShipment purchaseShipment) {
		this.purchaseShipment = purchaseShipment;
	}

}