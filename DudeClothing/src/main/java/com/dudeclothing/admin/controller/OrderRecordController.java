package com.dudeclothing.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dudeclothing.admin.model.OrderRecord;
import com.dudeclothing.admin.service.OrderRecordServices;

@Controller
@RequestMapping("order")
public class OrderRecordController {
	@Autowired
	private OrderRecordServices ordersServices;

	@RequestMapping(value = "/orders", method = RequestMethod.GET)
	@ResponseBody
	public List<OrderRecord> listAll(Model model) {
		System.out.println("Order list all is called");
		List<OrderRecord> list = ordersServices.getAll();
		return list;
	}

	@RequestMapping(value = "/add", method = RequestMethod.GET)
	@ResponseBody
	public OrderRecord addOrder(@RequestParam(value = "name") String name) {
		System.out.println("Order added");
		OrderRecord order = new OrderRecord();
		ordersServices.add(order);
		System.out.println(order.toString());
		return order;
	}

}
