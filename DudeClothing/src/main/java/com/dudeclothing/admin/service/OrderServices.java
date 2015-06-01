package com.dudeclothing.admin.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.dudeclothing.admin.dataRepo.OrderRepo;
import com.dudeclothing.admin.model.Order;

@Service
@Repository
public class OrderServices {

	@Autowired
	private OrderRepo orderRepo;

	@Transactional
	public List<Order> getAll() {
		List<Order> result = orderRepo.findAll();
		return result;
	}

	@Transactional
	public void add(Order order) {
		orderRepo.saveAndFlush(order);
	}
}
