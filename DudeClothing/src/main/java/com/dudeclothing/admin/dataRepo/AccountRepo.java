package com.dudeclothing.admin.dataRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dudeclothing.admin.model.Account;

public interface AccountRepo extends JpaRepository<Account, Long> {

}
