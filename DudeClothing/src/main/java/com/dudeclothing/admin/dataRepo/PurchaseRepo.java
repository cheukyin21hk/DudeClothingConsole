package com.dudeclothing.admin.dataRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dudeclothing.admin.model.Purchase;

public interface PurchaseRepo extends JpaRepository<Purchase, Long> {

}
