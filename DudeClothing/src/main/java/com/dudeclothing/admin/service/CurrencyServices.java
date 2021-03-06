package com.dudeclothing.admin.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.dudeclothing.admin.dataRepo.CurrencyRepo;
import com.dudeclothing.admin.model.Currency;

@Service
@Repository
public class CurrencyServices {

	@Autowired
	private CurrencyRepo currencyRepo;

	@Transactional
	public List<Currency> getAll() {
		return currencyRepo.findAll();
	}

	@Transactional
	public void add(Currency currency) {
		currencyRepo.saveAndFlush(currency);
	}

	@Transactional
	public Currency findCurrencyById(long currencyId) {
		return currencyRepo.findOne(currencyId);
	}
}
