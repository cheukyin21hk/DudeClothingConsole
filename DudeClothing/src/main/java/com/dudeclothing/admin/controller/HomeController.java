package com.dudeclothing.admin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.dudeclothing.admin.model.TestObject;
import com.dudeclothing.admin.service.TestObjectServices;

/**
 * Handles requests for the application home page.
 */
@Controller
@RequestMapping("/")
public class HomeController {

	@Autowired
	private TestObjectServices testObjectSvc;

	/**
	 * Requests to http://localhost:8080/hello will be mapped here. Everytime
	 * invoked, we pass list of all persons to view
	 */
	@RequestMapping(method = RequestMethod.GET)
	public String listAll(Model model) {
		model.addAttribute("persons", testObjectSvc.getAll());
		return "testExtJs";
	}

	/**
	 * POST requests to http://localhost:8080/hello/addPerson goes here. The new
	 * person data is passed from HTML from and bound into the Person object.
	 */
	@RequestMapping(value = "/addPerson", method = RequestMethod.POST)
	public String addPerson(@ModelAttribute TestObject person) {
		testObjectSvc.add(person);
		return "redirect:/";
	}

	@RequestMapping(value = "/basicInfo", method = RequestMethod.GET)
	public String basicInfoPage() {
		return "basicInfo";
	}

	@RequestMapping(value = "/clientInfo", method = RequestMethod.GET)
	public String clientInfo() {
		return "clientMgt";
	}

	@RequestMapping(value = "/orderInfo", method = RequestMethod.GET)
	public String orderInfo() {
		return "orderMgt";
	}

	@RequestMapping(value = "/purchaseInfo", method = RequestMethod.GET)
	public String purchaseInfo() {
		return "purchaseMgt";
	}
	
}