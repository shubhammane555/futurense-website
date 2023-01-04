package com.form.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.form.api.model.ContactUs;
import com.form.api.service.ContactUsService;

@RestController
public class ContactUsController {

	
	@Autowired
	private ContactUsService contactUsService;
	
	@PostMapping(value="/saveData")
	public ResponseEntity<ContactUs> saveItem(@RequestBody ContactUs req){
		return new ResponseEntity<>(contactUsService.save(req),HttpStatus.OK);
	}
}
