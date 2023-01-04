package com.form.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.form.api.model.ContactUs;
import com.form.api.repository.ContactUsRepository;
@Service
public class ContactUsServiceImpl implements ContactUsService{
	
	@Autowired
	private ContactUsRepository contactusrepository;

	@Override
	public ContactUs save(ContactUs req) {
		
		return contactusrepository.save(req);
	}
	

}
