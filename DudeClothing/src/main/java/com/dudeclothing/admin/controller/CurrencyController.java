package com.dudeclothing.admin.controller;

import java.util.List;

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
	@Autowired
	private CurrencyServices currencyServices;

	@RequestMapping(value = "/currencys", method = RequestMethod.GET)
	@ResponseBody
	public List<Currency> listAll(Model model) {
		System.out.println("Currency list all is called");
		List<Currency> list = currencyServices.getAll();
		return list;
	}

	@RequestMapping(value = "/add", method = RequestMethod.GET)
	@ResponseBody
	public Currency addCurrency(@RequestParam(value = "name") String name,
			@RequestParam(value = "rate") Float rate) {
		System.out.println("Currency added");
		Currency currency = new Currency();
		currency.setName(name);
		currency.setRate(rate);
		currencyServices.add(currency);
		System.out.println(currency.toString());
		return currency;
	}

}
