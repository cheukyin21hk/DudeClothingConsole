package com.dudeclothing.admin.dataRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dudeclothing.admin.model.Brand;

public interface BrandRepo extends JpaRepository<Brand, Long> {
}
