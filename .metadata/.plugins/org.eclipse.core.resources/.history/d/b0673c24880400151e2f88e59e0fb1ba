package com.dudeclothing.admin.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "test")
public class TestObject {
	@Id
	@GeneratedValue
	private int id;
	private String name;


	public TestObject() {
	}
	
	public TestObject(int test1, String name) {
		this.id = test1;
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
