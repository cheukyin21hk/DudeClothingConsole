package com.dudeclothing.admin.controller;

import java.util.Date;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dudeclothing.admin.model.Account;
import com.dudeclothing.admin.model.Brand;
import com.dudeclothing.admin.model.Client;
import com.dudeclothing.admin.model.Currency;
import com.dudeclothing.admin.model.OrderRecord;
import com.dudeclothing.admin.model.Purchase;
import com.dudeclothing.admin.model.Status;
import com.dudeclothing.admin.model.Stock;
import com.dudeclothing.admin.service.AccountServices;
import com.dudeclothing.admin.service.BrandServices;
import com.dudeclothing.admin.service.ClientServices;
import com.dudeclothing.admin.service.CurrencyServices;
import com.dudeclothing.admin.service.StatusServices;
import com.dudeclothing.admin.service.StockServices;
import com.dudeclothing.admin.service.TransactionServices;

@Controller
@RequestMapping(value = "transaction")
public class TransactionController {
	@Autowired
	private BrandServices brandServices;
	@Autowired
	private CurrencyServices currencyServices;
	@Autowired
	private TransactionServices transactionServices;
	@Autowired
	private AccountServices accountServices;
	@Autowired
	private ClientServices clientServices;
	@Autowired
	private StockServices stockServices;
	@Autowired
	private StatusServices statusServices;
	
	private final Logger logger = Logger.getLogger(TransactionServices.class);

	@RequestMapping(value = "/addPurchase", method = RequestMethod.GET)
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
		System.out.println("Purchase Quantity : " + purchase.getQuantity());

		Stock[] stocks = new Stock[quantity];

		Brand brand = brandServices.findBrandById(brandId);
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

		logger.debug(purchase.getPurchaseId());
		for (int i = 0; i < stocks.length; i++) {
			stocks[i] = new Stock();
			stocks[i].setName(stockName);
			stocks[i].setSize(size);
			stocks[i].setBrand(brand);
			stocks[i].setSold('N');
		}
		transactionServices.addPurchase(purchase, stocks);
		return purchase;
	}

	@RequestMapping(value = "/addOrder", method = RequestMethod.GET)
	@ResponseBody
	public OrderRecord addOrderRecord(@RequestParam(value = "deposit") float deposit,
			@RequestParam(value = "depositeDate") Date depositeDate,
			@RequestParam(value = "price") float price,
			@RequestParam(value = "accountId") long accountId,
			@RequestParam(value = "statusId") long statusId,
			@RequestParam(value = "clientId") long clientId,
			@RequestParam(value = "stockId") long stockId) {
		logger.debug("add order record is called");
		System.out.println("order Record is called");
		Stock stock = stockServices.findStockById(stockId);
		Account account = accountServices.findAccountById(accountId);
		Status status = statusServices.findStatusById(statusId);
		Client client = clientServices.findClientById(clientId);
		OrderRecord orderRecord = new OrderRecord();
		orderRecord.setAccount(account);
		orderRecord.setClient(client);
		orderRecord.setDeposit(deposit);
		orderRecord.setDepositeDate(depositeDate);
		orderRecord.setOrderRecordDate(new Date());
		orderRecord.setPrice(price);
		orderRecord.setStatus(status);
		orderRecord.setStock(stock);
		transactionServices.addOrder(orderRecord);
		return transactionServices.addOrder(orderRecord);
	}

}