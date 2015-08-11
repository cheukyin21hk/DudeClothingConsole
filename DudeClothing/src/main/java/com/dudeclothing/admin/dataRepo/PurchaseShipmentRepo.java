package com.dudeclothing.admin.dataRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dudeclothing.admin.model.PurchaseShipment;

public interface PurchaseShipmentRepo extends
		JpaRepository<PurchaseShipment, Long> {

}
