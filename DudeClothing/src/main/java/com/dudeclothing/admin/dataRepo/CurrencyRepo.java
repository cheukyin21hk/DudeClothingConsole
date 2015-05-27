package com.dudeclothing.admin.dataRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dudeclothing.admin.model.Currency;

public interface CurrencyRepo extends JpaRepository<Currency, Long> {

}
