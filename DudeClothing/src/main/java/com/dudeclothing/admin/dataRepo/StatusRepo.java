package com.dudeclothing.admin.dataRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dudeclothing.admin.model.Status;

public interface StatusRepo extends JpaRepository<Status, Long> {

}
