package com.dudeclothing.admin.dataRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dudeclothing.admin.model.TestObject;

public interface TestObjectRepository extends JpaRepository<TestObject,Long>{
	
}
