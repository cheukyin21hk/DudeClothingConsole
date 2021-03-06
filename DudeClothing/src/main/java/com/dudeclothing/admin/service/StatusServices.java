package com.dudeclothing.admin.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.dudeclothing.admin.dataRepo.StatusRepo;
import com.dudeclothing.admin.model.Status;

@Service
@Repository
public class StatusServices {

	@Autowired
	private StatusRepo statusRepo;

	@Transactional
	public List<Status> getAll() {
		List<Status> result = statusRepo.findAll();
		return result;
	}

	@Transactional
	public void add(Status status) {
		statusRepo.saveAndFlush(status);
	}

	@Transactional
	public Status findStatusById(long statusId) {
		return statusRepo.findOne(statusId);
	}
}
