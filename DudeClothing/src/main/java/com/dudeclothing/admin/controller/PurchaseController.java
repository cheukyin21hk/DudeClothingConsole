package com.dudeclothing.admin.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dudeclothing.admin.model.Brand;
import com.dudeclothing.admin.model.Currency;
import com.dudeclothing.admin.model.Purchase;
import com.dudeclothing.admin.model.Stock;
import com.dudeclothing.admin.service.BrandServices;
import com.dudeclothing.admin.service.CurrencyServices;
import com.dudeclothing.admin.service.PurchaseServices;
import com.dudeclothing.admin.service.StockServices;

@Controller
@RequestMapping("purchase")
public class PurchaseController {
	@Autowired
	private PurchaseServices purchaseServices;
	@Autowired
	private StockServices stockServices;
	@Autowired
	private BrandServices brandServices;
	@Autowired
	private CurrencyServices currencyServices;

	@RequestMapping(value = "/purchases", method = RequestMethod.GET)
	@ResponseBody
	public List<Purchase> listAll(Model model) {
		System.out.println("Purchase list all is called");
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
		System.out.println("Purchase added");

		Purchase purchase = new Purchase();
		Stock stock;
		Brand brand = brandServices.getBrandById(brandId);
		Currency currency = currencyServices.findCurrencyById(currencyId);
		
		purchase.setCurrencyPrice(currencyPrice);
		purchase.setCurrency(currency);
		purchase.setForeignShipCost(foreignShipCost);
		purchase.setInvoice(invoice);
		purchase.setLocalShipCost(localShipCost);
		purchase.setLogisticCode(logisticCode);
		purchase.setQuantity(quantity);
		purchase.setTrackingNo(trackingNo);
		purchase.setDate(new Date());
		purchase = purchaseServices.add(purchase);
		System.out.println(purchase.getPurchaseId());
		for (int i = 0; i < quantity; i++) {
			stock = new Stock();
			stock.setName(stockName);
			stock.setSize(size);
			stock.setBrandId(brand);
			stock.setPurchaseId(purchase);
			stock.setSold('N');
			stockServices.add(stock);
		}
		System.out.println(purchase.toString());

		return purchase;
	}
}
