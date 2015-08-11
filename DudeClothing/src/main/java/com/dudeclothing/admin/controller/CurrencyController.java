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

import com.dudeclothing.admin.model.Currency;
import com.dudeclothing.admin.service.CurrencyServices;

@Controller
@RequestMapping("currency")
public class CurrencyController {

	private final Logger logger = Logger.getLogger(CurrencyController.class);

	@Autowired
	private CurrencyServices currencyServices;

	@RequestMapping(value = "/currencys", method = RequestMethod.GET)
	@ResponseBody
	public List<Currency> listAll(Model model) {
		if (logger.isInfoEnabled()) {
			logger.info("Currency list all is called");
		}
		List<Currency> list = currencyServices.getAll();
		return list;
	}

	@RequestMapping(value = "/add", method = RequestMethod.GET)
	@ResponseBody
	public Currency addCurrency(@RequestParam(value = "name") String name,
			@RequestParam(value = "rate") Float rate) {
		if (logger.isInfoEnabled()) {
			logger.info("Currency added");
		}
		Currency currency = new Currency();
		currency.setName(name);
		currency.setRate(rate);
		currencyServices.add(currency);
		if (logger.isInfoEnabled()) {
			logger.info(currency.toString());
		}
		return currency;
	}

}
