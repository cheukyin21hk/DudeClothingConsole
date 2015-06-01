package com.dudeclothing.admin.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value = "/dao/**")
public class DataAccessController {
	
	private static final Logger logger = LoggerFactory.getLogger(DataAccessController.class);
	
	@RequestMapping(value = "/testData", method = RequestMethod.GET)
	public String testData() {
		logger.info("method success");
		return "home";
	} 
	
}