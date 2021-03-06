package com.dudeclothing.admin.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.dudeclothing.admin.dataRepo.ClientRepo;
import com.dudeclothing.admin.model.Client;

@Service
@Repository
public class ClientServices {

	@Autowired
	private ClientRepo clientRepo;

	@Transactional
	public List<Client> getAll() {
		return clientRepo.findAll();
	}

	@Transactional
	public void add(Client client) {
		clientRepo.saveAndFlush(client);
	}

	@Transactional
	public Client findClientById(long clientId) {
		return clientRepo.findOne(clientId);
	}
}
