package com.dudeclothing.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dudeclothing.admin.model.Status;
import com.dudeclothing.admin.service.StatusServices;

@Controller
@RequestMapping("status")
public class StatusController {
	@Autowired
	private StatusServices statusServices;

	@RequestMapping(value = "/statuses", method = RequestMethod.GET)
	@ResponseBody
	public List<Status> listAll() {
		System.out.println("Status list all is called");
		List<Status> list = statusServices.getAll();
		return list;
	}

	@RequestMapping(value = "/add", method = RequestMethod.GET)
	@ResponseBody
	public Status addStatus(@RequestParam(value = "name") String name) {
		System.out.println("Status added");
		Status status = new Status();
		status.setName(name);
		statusServices.add(status);
		System.out.println(status.toString());
		return status;
	}

}
