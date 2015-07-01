package com.dudeclothing.admin.service;

import javax.transaction.Transactional;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.dudeclothing.admin.dataRepo.BrandRepo;
import com.dudeclothing.admin.dataRepo.CurrencyRepo;
import com.dudeclothing.admin.dataRepo.OrderRecordRepo;
import com.dudeclothing.admin.dataRepo.PurchaseRepo;
import com.dudeclothing.admin.dataRepo.StockRepo;
import com.dudeclothing.admin.model.OrderRecord;
import com.dudeclothing.admin.model.Purchase;
import com.dudeclothing.admin.model.Stock;

@Service
@Repository
public class TransactionServices {
	private final Logger logger = Logger.getLogger(TransactionServices.class);

	@Autowired
	private PurchaseRepo purchaseRepo;
	@Autowired
	private CurrencyRepo currencyRepo;
	@Autowired
	private BrandRepo brandRepo;
	@Autowired
	private StockRepo stockRepo;
	@Autowired
	private OrderRecordRepo orderRepo;

	@Transactional
	public Purchase addPurchase(Purchase purchase, Stock[] stocks) {
		try {
			purchase = purchaseRepo.save(purchase);
			logger.info("The purchase saved successfully");
			purchaseRepo.flush();
			logger.info("The purchase flushed successfully");

			for (int i = 0; i < stocks.length; i++) {
				stocks[i].setPurchase(purchase);
				stockRepo.save(stocks[i]);
			}
			logger.info("The stock saved successfully");
			stockRepo.flush();
			logger.info("The stock flushed successfully");
		} catch (Exception ex) {
			if (purchaseRepo.exists(purchase.getPurchaseId())) {
				purchaseRepo.delete(purchase);
			}
			for (int i = 0; i < stocks.length; i++) {
				if (stockRepo.exists(stocks[i].getStockId())) {
					stockRepo.delete(stocks[i]);
				}
			}
		}
		return purchase;
	}

	@Transactional
	public OrderRecord addOrder(OrderRecord orderRecord) {
		return orderRepo.saveAndFlush(orderRecord);
	}

}
