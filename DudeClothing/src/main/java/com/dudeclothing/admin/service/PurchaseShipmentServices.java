package com.dudeclothing.admin.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.dudeclothing.admin.dataRepo.PurchaseShipmentRepo;
import com.dudeclothing.admin.model.PurchaseShipment;

@Service
@Repository
public class PurchaseShipmentServices {

	@Autowired
	private PurchaseShipmentRepo purchaseShipmentRepo;

	@Transactional
	public List<PurchaseShipment> getAll() {
		return purchaseShipmentRepo.findAll();
	}

	@Transactional
	public void add(PurchaseShipment purchaseShipment) {
		purchaseShipmentRepo.saveAndFlush(purchaseShipment);
	}

	@Transactional
	public PurchaseShipment findAccountById(long purchaseShipmentPK) {
		return purchaseShipmentRepo.findOne(purchaseShipmentPK);
	}
}
