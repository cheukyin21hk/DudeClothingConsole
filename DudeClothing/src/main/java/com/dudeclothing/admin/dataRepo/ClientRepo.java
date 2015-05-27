package com.dudeclothing.admin.dataRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dudeclothing.admin.model.Client;

public interface ClientRepo extends JpaRepository<Client, Long> {

}
