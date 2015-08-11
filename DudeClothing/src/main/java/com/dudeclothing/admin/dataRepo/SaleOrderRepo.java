package com.dudeclothing.admin.dataRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dudeclothing.admin.model.SaleOrder;

public interface SaleOrderRepo extends JpaRepository<SaleOrder, Long> {

}
