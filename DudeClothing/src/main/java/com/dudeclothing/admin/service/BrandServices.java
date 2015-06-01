package com.dudeclothing.admin.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.dudeclothing.admin.dataRepo.BrandRepo;
import com.dudeclothing.admin.model.Brand;

@Service
@Repository
public class BrandServices {

	@Autowired
	private BrandRepo brandRepo;

	@Transactional
	public List<Brand> getAll() {
		List<Brand> result = brandRepo.findAll();
		return result;
	}

	@Transactional
	public void add(Brand brand) {
		brandRepo.saveAndFlush(brand);
	}
}
