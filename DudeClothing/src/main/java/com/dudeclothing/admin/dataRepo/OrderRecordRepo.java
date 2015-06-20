package com.dudeclothing.admin.dataRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dudeclothing.admin.model.OrderRecord;

public interface OrderRecordRepo extends JpaRepository<OrderRecord, Long> {

}
