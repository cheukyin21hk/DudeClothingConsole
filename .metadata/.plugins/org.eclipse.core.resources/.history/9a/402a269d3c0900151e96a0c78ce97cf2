package com.dudeclothing.admin.controller;

import java.util.ArrayList;
import java.util.List;

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

	@RequestMapping(value = "/accounts", method = RequestMethod.GET)
	@ResponseBody
	public List<Account> listAll(Model model) {
		System.out.println("Account list all is called");
		List<Account> list = accountServices.getAll();
		return list;
	}

	@RequestMapping(value = "/add", method = RequestMethod.GET)
	@ResponseBody
	public Account addAccount(@RequestParam(value = "name") String name) {
		System.out.println("Person added");
		Account account = new Account(name);
		accountServices.add(account);
		return account;
	}

}
