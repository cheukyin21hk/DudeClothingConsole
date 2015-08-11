package com.dudeclothing.admin.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.dudeclothing.admin.dataRepo.SaleItemRepo;
import com.dudeclothing.admin.model.SaleItem;

@Service
@Repository
public class SaleItemServices {

	@Autowired
	private SaleItemRepo saleItemRepo;

	@Transactional
	public List<SaleItem> getAll() {
		return saleItemRepo.findAll();
	}

	@Transactional
	public void add(SaleItem saleItem) {
		saleItemRepo.saveAndFlush(saleItem);
	}

	@Transactional
	public SaleItem findAccountById(long saleItemPK) {
		return saleItemRepo.findOne(saleItemPK);
	}
}
