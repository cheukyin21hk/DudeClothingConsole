package com.dudeclothing.admin.dataRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dudeclothing.admin.model.SaleItem;

public interface SaleItemRepo extends JpaRepository<SaleItem, Long> {

}
