package com.dudeclothing.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dudeclothing.admin.model.Client;
import com.dudeclothing.admin.service.ClientServices;

@Controller
@RequestMapping("client")
public class ClientController {
	@Autowired
	private ClientServices clientServices;

	@RequestMapping(value = "/clients", method = RequestMethod.GET)
	@ResponseBody
	public List<Client> listAll(Model model) {
		System.out.println("Client list all is called");
		List<Client> list = clientServices.getAll();
		return list;
	}

	@RequestMapping(value = "/add", method = RequestMethod.GET)
	@ResponseBody
	public Client addClient(@RequestParam(value = "name") String name,@RequestParam(value ="phoneNumber")int phoneNumber) {
		System.out.println("Client added");
		Client client = new Client();
		client.setName(name);
		client.setPhoneNo(phoneNumber);
		clientServices.add(client);
		System.out.println(client.toString());
		return client;
	}

}
