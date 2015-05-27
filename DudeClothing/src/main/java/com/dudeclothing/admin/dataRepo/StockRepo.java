package com.dudeclothing.admin.dataRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dudeclothing.admin.model.Stock;

public interface StockRepo extends JpaRepository<Stock,Long> {

}
