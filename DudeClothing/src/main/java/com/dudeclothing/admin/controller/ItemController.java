package com.dudeclothing.admin.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dudeclothing.admin.model.Brand;
import com.dudeclothing.admin.model.Item;
import com.dudeclothing.admin.service.BrandServices;
import com.dudeclothing.admin.service.ItemServices;

@Controller
@RequestMapping("item")
public class ItemController {
	@Autowired
	private ItemServices itemServices;
	@Autowired
	private BrandServices brandServices;

	private final Logger logger = Logger.getLogger(ItemController.class);

	@RequestMapping(value = "/items", method = RequestMethod.GET)
	@ResponseBody
	public List<Item> listAll(Model model) {
		if (logger.isDebugEnabled()) {
			logger.debug("Item list all is called");
		}
		List<Item> list = itemServices.getAll();
		return list;
	}

	@RequestMapping(value = "/add", method = RequestMethod.GET)
	@ResponseBody
	public Item addItem(@RequestParam(value = "name") String name,
			@RequestParam(value = "brandId") long brandId) {
		if (logger.isDebugEnabled()) {
			logger.debug("Item added");
		}
		Brand tempBrand = brandServices.findBrandById(brandId);
		Item item = new Item();
		item.setBrand(tempBrand);
		itemServices.add(item);
		if (logger.isDebugEnabled()) {
			logger.debug(item.toString());
		}
		return item;
	}
}
