package com.dudeclothing.admin.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.dudeclothing.admin.dataRepo.StockRepo;
import com.dudeclothing.admin.model.Stock;

@Service
@Repository
public class StockServices {

	@Autowired
	private StockRepo stockRepo;

	@Transactional
	public List<Stock> getAll() {
		List<Stock> result = stockRepo.findAll();
		return result;
	}

	@Transactional
	public void add(Stock stock) {
		stockRepo.saveAndFlush(stock);
	}
}
