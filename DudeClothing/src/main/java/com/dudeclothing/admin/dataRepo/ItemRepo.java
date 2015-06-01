package com.dudeclothing.admin.dataRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dudeclothing.admin.model.Item;

public interface ItemRepo extends JpaRepository<Item, Long> {

}