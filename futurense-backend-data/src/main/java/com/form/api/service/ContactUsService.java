package com.form.api.service;

import org.springframework.stereotype.Service;

import com.form.api.model.ContactUs;

@Service
public interface ContactUsService {
	
public ContactUs save(ContactUs req);

}
