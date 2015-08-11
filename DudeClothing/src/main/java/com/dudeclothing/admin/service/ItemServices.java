package com.dudeclothing.admin.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.dudeclothing.admin.dataRepo.ItemRepo;
import com.dudeclothing.admin.model.Item;

@Service
@Repository
public class ItemServices {

	@Autowired
	private ItemRepo itemRepo;

	@Transactional
	public List<Item> getAll() {
		return itemRepo.findAll();
	}

	@Transactional
	public void add(Item item) {
		itemRepo.saveAndFlush(item);
	}

	@Transactional
	public Item findAccountById(long itemId) {
		return itemRepo.findOne(itemId);
	}
}
