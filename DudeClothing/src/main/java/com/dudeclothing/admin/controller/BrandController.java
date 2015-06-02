package com.dudeclothing.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.dudeclothing.admin.model.Brand;
import com.dudeclothing.admin.service.BrandServices;

@Controller
@RequestMapping("/brand/**")
public class BrandController {

	@Autowired
	private BrandServices brandServices;

	@RequestMapping(method = RequestMethod.GET)
	public List<Brand> listAll(Model model) {
		return brandServices.getAll();
	}

}
