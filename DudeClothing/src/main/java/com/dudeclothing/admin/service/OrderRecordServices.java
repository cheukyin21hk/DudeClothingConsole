package com.dudeclothing.admin.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.dudeclothing.admin.dataRepo.OrderRecordRepo;
import com.dudeclothing.admin.model.OrderRecord;

@Service
@Repository
public class OrderRecordServices {

	@Autowired
	private OrderRecordRepo ordersRepo;

	@Transactional
	public List<OrderRecord> getAll() {
		List<OrderRecord> result = ordersRepo.findAll();
		return result;
	}

	@Transactional
	public void add(OrderRecord order) {
		ordersRepo.saveAndFlush(order);
	}
}
