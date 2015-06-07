package com.dudeclothing.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dudeclothing.admin.model.Brand;
import com.dudeclothing.admin.service.BrandServices;

@Controller
@RequestMapping("brand")
public class BrandController {
	@Autowired
	private BrandServices brandServices;

	@RequestMapping(value = "/brands", method = RequestMethod.GET)
	@ResponseBody
	public List<Brand> listAll(Model model) {
		System.out.println("Brand list all is called");
		List<Brand> list = brandServices.getAll();
		return list;
	}

	@RequestMapping(value = "/add", method = RequestMethod.GET)
	@ResponseBody
	public Brand addBrand(@RequestParam(value = "name") String name) {
		System.out.println("Brand added");
		Brand brand = new Brand();
		brand.setName(name);
		brandServices.add(brand);
		System.out.println(brand.toString());
		return brand;
	}

}
