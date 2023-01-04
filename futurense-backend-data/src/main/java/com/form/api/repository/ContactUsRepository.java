package com.form.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.form.api.model.ContactUs;

@Repository
public interface ContactUsRepository extends JpaRepository<ContactUs, Integer>{
	

}
