package com.dudeclothing.admin.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dudeclothing.admin.model.PurchaseItem;
import com.dudeclothing.admin.model.PurchaseOrder;
import com.dudeclothing.admin.model.PurchaseShipment;
import com.dudeclothing.admin.model.SaleItem;
import com.dudeclothing.admin.model.SaleOrder;
import com.dudeclothing.admin.service.PurchaseItemServices;
import com.dudeclothing.admin.service.PurchaseOrderServices;
import com.dudeclothing.admin.service.PurchaseShipmentServices;
import com.dudeclothing.admin.service.SaleItemServices;
import com.dudeclothing.admin.service.SaleOrderServices;

@Controller
@RequestMapping("transaction")
public class TransactionController {
	@Autowired
	private PurchaseItemServices purchaseItemServices;
	@Autowired
	private PurchaseOrderServices purchaseOrderServices;
	@Autowired
	private PurchaseShipmentServices purchaseShipmentServices;
	@Autowired
	private SaleItemServices saleItemServices;
	@Autowired
	private SaleOrderServices saleOrderServices;

	private final Logger logger = Logger.getLogger(TransactionController.class);

	@RequestMapping(value = "/purchaseItems", method = RequestMethod.GET)
	@ResponseBody
	public List<PurchaseItem> listAllPurchaseItem() {
		if (logger.isInfoEnabled()) {
			logger.info("purchase item list all is called");
		}
		List<PurchaseItem> list = purchaseItemServices.getAll();
		return list;
	}

	@RequestMapping(value = "/purchaseShipments", method = RequestMethod.GET)
	@ResponseBody
	public List<PurchaseShipment> listAllPurchaseShipment() {
		if (logger.isInfoEnabled()) {
			logger.info("purchase shipment list all is called");
		}
		List<PurchaseShipment> list = purchaseShipmentServices.getAll();
		return list;
	}

	@RequestMapping(value = "/purchaseOrders", method = RequestMethod.GET)
	@ResponseBody
	public List<PurchaseOrder> listAllPurchaseOrder() {
		if (logger.isInfoEnabled()) {
			logger.info("purchase order list all is called");
		}
		List<PurchaseOrder> list = purchaseOrderServices.getAll();
		return list;
	}

	@RequestMapping(value = "/saleOrders", method = RequestMethod.GET)
	@ResponseBody
	public List<SaleOrder> listAllSaleOrder() {
		if (logger.isInfoEnabled()) {
			logger.info("purchase order list all is called");
		}
		List<SaleOrder> list = saleOrderServices.getAll();
		return list;
	}

	@RequestMapping(value = "/saleItems", method = RequestMethod.GET)
	@ResponseBody
	public List<SaleItem> listAllSaleItem() {
		if (logger.isInfoEnabled()) {
			logger.info("purchase order list all is called");
		}
		List<SaleItem> list = saleItemServices.getAll();
		return list;
	}
}
