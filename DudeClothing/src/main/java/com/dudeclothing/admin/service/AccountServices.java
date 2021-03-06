package com.dudeclothing.admin.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.dudeclothing.admin.dataRepo.AccountRepo;
import com.dudeclothing.admin.model.Account;

@Service
@Repository
public class AccountServices {

	@Autowired
	private AccountRepo accountRepo;

	@Transactional
	public List<Account> getAll() {
		return accountRepo.findAll();
	}

	@Transactional
	public void add(Account account) {
		accountRepo.saveAndFlush(account);
	}

	@Transactional
	public Account findAccountById(long accountId) {
		return accountRepo.findOne(accountId);
	}
}
