package com.dudeclothing.admin.dataRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dudeclothing.admin.model.PurchaseItem;

public interface PurchaseItemRepo extends JpaRepository<PurchaseItem, Long> {

}
