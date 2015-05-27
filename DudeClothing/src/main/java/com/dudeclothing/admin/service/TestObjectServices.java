package com.dudeclothing.admin.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.dudeclothing.admin.dataRepo.TestObjectRepository;
import com.dudeclothing.admin.model.TestObject;

@Service
@Repository
public class TestObjectServices {
   
  // An EntityManager will be automatically injected from EntityManagerFactory setup on
  // spring-context.xml
	
	
	@Autowired
	private TestObjectRepository testObjectRepo;
   
  // Since we've setup <tx:annotation-config> and transaction manager on spring-context.xml,
  // any bean method annotated with @Transactional will cause Spring to magically call
  // begin() and commit() at the start/end of the method. If exception occurs it will also
  // call rollback()
  @Transactional
  public List<TestObject> getAll() {
    List<TestObject> result = testObjectRepo.findAll();
    return result;
  }
   
  @Transactional
  public void add(TestObject testObj) {
    testObjectRepo.saveAndFlush(testObj);
  }
}