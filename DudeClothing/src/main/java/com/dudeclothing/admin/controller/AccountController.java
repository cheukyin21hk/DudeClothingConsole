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

import com.dudeclothing.admin.model.Account;
import com.dudeclothing.admin.service.AccountServices;

@Controller
@RequestMapping("account")
public class AccountController {
	@Autowired
	private AccountServices accountServices;
	private final Logger logger = Logger.getLogger(AccountController.class);

	@RequestMapping(value = "/accounts", method = RequestMethod.GET)
	@ResponseBody
	public List<Account> listAll(Model model) {
		if (logger.isDebugEnabled()) {
			logger.debug("Account list all is called");
		}
		List<Account> list = accountServices.getAll();
		return list;
	}

	@RequestMapping(value = "/add", method = RequestMethod.GET)
	@ResponseBody
	public Account addAccount(@RequestParam(value = "name") String name) {
		if (logger.isDebugEnabled()) {
			logger.debug("Account added");
		}
		Account account = new Account(name);
		accountServices.add(account);
		if (logger.isDebugEnabled()) {
			logger.debug(account.toString());
		}
		return account;
	}

}
