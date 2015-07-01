package com.dudeclothing.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dudeclothing.admin.model.Stock;
import com.dudeclothing.admin.service.StockServices;

@Controller
@RequestMapping("stock")
public class StockController {
	@Autowired
	private StockServices stockServices;

	@RequestMapping(value = "/stocks", method = RequestMethod.GET)
	@ResponseBody
	public List<Stock> listAll(Model model) {
		System.out.println("Stock list all is called");
		List<Stock> list = stockServices.getAll();
		return list;
	}

}
