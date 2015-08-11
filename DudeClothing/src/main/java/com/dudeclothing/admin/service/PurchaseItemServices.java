package com.dudeclothing.admin.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.dudeclothing.admin.dataRepo.PurchaseItemRepo;
import com.dudeclothing.admin.model.PurchaseItem;

@Service
@Repository
public class PurchaseItemServices {

	@Autowired
	private PurchaseItemRepo purcahseItemRepo;

	@Transactional
	public List<PurchaseItem> getAll() {
		return purcahseItemRepo.findAll();
	}

	@Transactional
	public void add(PurchaseItem purchaseItems) {
		purcahseItemRepo.saveAndFlush(purchaseItems);
	}

	@Transactional
	public PurchaseItem findAccountById(long purchaseItemPK) {
		return purcahseItemRepo.findOne(purchaseItemPK);
	}
}
