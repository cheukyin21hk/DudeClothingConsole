package com.dudeclothing.admin.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.dudeclothing.admin.dataRepo.PurchaseRepo;
import com.dudeclothing.admin.model.Purchase;

@Service
@Repository
public class PurchaseServices {

	@Autowired
	private PurchaseRepo purchaseRepo;

	@Transactional
	public List<Purchase> getAll() {
		List<Purchase> result = purchaseRepo.findAll();
		return result;
	}

	@Transactional
	public void add(Purchase purchase) {
		purchaseRepo.saveAndFlush(purchase);
	}
}