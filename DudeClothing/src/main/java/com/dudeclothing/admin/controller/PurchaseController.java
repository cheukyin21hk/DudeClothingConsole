package com.dudeclothing.admin.controller;

import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dudeclothing.admin.model.Purchase;
import com.dudeclothing.admin.service.PurchaseServices;

@Controller
@RequestMapping("purchase")
public class PurchaseController {
	@Autowired
	private PurchaseServices purchaseServices;
	private final Logger logger = Logger.getLogger(PurchaseController.class);

	@RequestMapping(value = "/purchases", method = RequestMethod.GET)
	@ResponseBody
	public List<Purchase> listAll(Model model) {
		logger.debug("Purchase list all is called");
		List<Purchase> list = purchaseServices.getAll();
		return list;
	}

	@RequestMapping(value = "/add", method = RequestMethod.GET)
	@ResponseBody
	public Purchase addPurchase(
			@RequestParam(value = "invoice") String invoice,
			@RequestParam(value = "quantity") int quantity,
			@RequestParam(value = "currencyPrice") float currencyPrice,
			@RequestParam(value = "foreignShipCost") float foreignShipCost,
			@RequestParam(value = "localShipCost") float localShipCost,
			@RequestParam(value = "trackingNo") int trackingNo,
			@RequestParam(value = "logisticCode") int logisticCode,
			@RequestParam(value = "stockName") String stockName,
			@RequestParam(value = "size") String size,
			@RequestParam(value = "brandId") long brandId,
			@RequestParam(value = "currencyId") long currencyId) {
		logger.debug("Purchase added");
		Purchase purchase = new Purchase();
		purchase.setCurrencyPrice(currencyPrice);
		purchase.setCurrency(null);
		purchase.setForeignShipCost(foreignShipCost);
		purchase.setInvoice(invoice);
		purchase.setLocalShipCost(localShipCost);
		purchase.setLogisticCode(logisticCode);
		purchase.setQuantity(quantity);
		purchase.setTrackingNo(trackingNo);
		purchase.setDate(new Date());
		purchase = purchaseServices.add(purchase);
		return purchase;
	}

}
