package com.dudeclothing.admin.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/*This is the controller to carry the CRUD operation 
 * for the basic info ( Brand,Status,Currency,Account)*/
@Controller
@RequestMapping(value = "/basicInfo/**")
public class BasicInfoController {

	private static final Logger logger = LoggerFactory
			.getLogger(BasicInfoController.class);

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String testData() {
		logger.info("method success");
		return "basicInfo";
	}

	@ModelAttribute("statusList")
	public Map<String, String> statusList() {
		Map<String, String> list = new HashMap<String, String>();
		list.put("statusList", "Status List");
		return list;
	}

	@ModelAttribute("accountList")
	public Map<String, String> accountList() {
		Map<String, String> list = new HashMap<String, String>();
		list.put("accountList", "Account List");
		return list;
	}

	@ModelAttribute("currencyList")
	public Map<String, String> currencyList() {
		Map<String, String> list = new HashMap<String, String>();
		list.put("currencyList", "Currency List");
		return list;
	}

	@ModelAttribute("brandList")
	public Map<String, String> brandList() {
		Map<String, String> list = new HashMap<String, String>();
		list.put("brandList", "Brand List");
		return list;
	}

	@RequestMapping(value = "/addbrand", method = RequestMethod.GET)
	public Boolean addBrand() {
		return false;
	}

	@RequestMapping(value = "/editbrand", method = RequestMethod.GET)
	public Boolean editBrand() {
		return false;
	}

	@RequestMapping(value = "/deletebrand", method = RequestMethod.GET)
	public Boolean deleteBrand() {
		return false;
	}

	@RequestMapping(value = "/addaccount", method = RequestMethod.GET)
	public Boolean addAccount() {
		return false;
	}

	@RequestMapping(value = "/editaccount", method = RequestMethod.GET)
	public Boolean editAccount() {
		return false;
	}

	@RequestMapping(value = "/deleteaccnout", method = RequestMethod.GET)
	public Boolean deleteAccount() {
		return false;
	}

	@RequestMapping(value = "/addcurrency", method = RequestMethod.GET)
	public Boolean addCurrency() {
		return false;
	}

	@RequestMapping(value = "/editcurrency", method = RequestMethod.GET)
	public Boolean editCurrency() {
		return false;
	}

	@RequestMapping(value = "/deletecurrency", method = RequestMethod.GET)
	public Boolean deleteCurrency() {
		return false;
	}

	@RequestMapping(value = "/addstatus", method = RequestMethod.GET)
	public Boolean addStatus() {
		return false;
	}

	@RequestMapping(value = "/editstatus", method = RequestMethod.GET)
	public Boolean editStatus() {
		return false;
	}

	@RequestMapping(value = "/deletestatus", method = RequestMethod.GET)
	public Boolean deleteStatus() {
		return false;
	}

}
