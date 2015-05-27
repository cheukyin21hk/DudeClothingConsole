package com.dudeclothing.admin.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the purchase database table.
 * 
 */
@Entity
@NamedQuery(name="Purchase.findAll", query="SELECT p FROM Purchase p")
public class Purchase implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int purchaseId;

	private float currencyPrice;

	@Temporal(TemporalType.DATE)
	private Date date;

	private float foreignShipCost;

	private String invoice;

	private float localShipCost;

	private int logisticCode;

	private int quantity;

	private int trackingNo;

	//bi-directional many-to-one association to Order
	@OneToMany(mappedBy="purchase")
	private List<Order> orders;

	//bi-directional many-to-one association to Currency
	@ManyToOne
	@JoinColumn(name="currencyId")
	private Currency currency;

	//bi-directional one-to-one association to Item
	@OneToOne
	@JoinColumn(name="purchaseId")
	private Item item;

	//bi-directional many-to-one association to Stock
	@OneToMany(mappedBy="purchase")
	private List<Stock> stocks;

	public Purchase() {
	}

	public int getPurchaseId() {
		return this.purchaseId;
	}

	public void setPurchaseId(int purchaseId) {
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

	public List<Order> getOrders() {
		return this.orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}

	public Order addOrder(Order order) {
		getOrders().add(order);
		order.setPurchase(this);

		return order;
	}

	public Order removeOrder(Order order) {
		getOrders().remove(order);
		order.setPurchase(null);

		return order;
	}

	public Currency getCurrency() {
		return this.currency;
	}

	public void setCurrency(Currency currency) {
		this.currency = currency;
	}

	public Item getItem() {
		return this.item;
	}

	public void setItem(Item item) {
		this.item = item;
	}

	public List<Stock> getStocks() {
		return this.stocks;
	}

	public void setStocks(List<Stock> stocks) {
		this.stocks = stocks;
	}

	public Stock addStock(Stock stock) {
		getStocks().add(stock);
		stock.setPurchase(this);

		return stock;
	}

	public Stock removeStock(Stock stock) {
		getStocks().remove(stock);
		stock.setPurchase(null);

		return stock;
	}

}