package com.dudeclothing.admin.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.dudeclothing.admin.dataRepo.PurchaseOrderRepo;
import com.dudeclothing.admin.model.PurchaseOrder;

@Service
@Repository
public class PurchaseOrderServices {

	@Autowired
	private PurchaseOrderRepo purchaseOrderRepo;

	@Transactional
	public List<PurchaseOrder> getAll() {
		return purchaseOrderRepo.findAll();
	}

	@Transactional
	public void add(PurchaseOrder purchaseOrder) {
		purchaseOrderRepo.saveAndFlush(purchaseOrder);
	}

	@Transactional
	public PurchaseOrder findAccountById(long purchaseOrder) {
		return purchaseOrderRepo.findOne(purchaseOrder);
	}
}
