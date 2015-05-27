package com.dudeclothing.admin.dataRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dudeclothing.admin.model.Order;

public interface OrderRepo extends JpaRepository<Order, Long> {

}
