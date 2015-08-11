package com.dudeclothing.admin.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.dudeclothing.admin.dataRepo.SaleOrderRepo;
import com.dudeclothing.admin.model.SaleOrder;

@Service
@Repository
public class SaleOrderServices {

	@Autowired
	private SaleOrderRepo saleOrderRepo;

	@Transactional
	public List<SaleOrder> getAll() {
		return saleOrderRepo.findAll();
	}

	@Transactional
	public void add(SaleOrder saleOrder) {
		saleOrderRepo.saveAndFlush(saleOrder);
	}

	@Transactional
	public SaleOrder findsaleOrderById(long saleOrderId) {
		return saleOrderRepo.findOne(saleOrderId);
	}
}
