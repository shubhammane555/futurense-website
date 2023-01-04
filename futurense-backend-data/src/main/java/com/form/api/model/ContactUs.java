package com.form.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ContactUs {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String name;
	private String email;
	private String companyName;
	private String phoneNumber;
	private String jobRole;
	private String tellusBlock;
	public ContactUs() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ContactUs(Integer id, String name, String email, String companyName, String phoneNumber, String jobRole,
			String tellusBlock) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.companyName = companyName;
		this.phoneNumber = phoneNumber;
		this.jobRole = jobRole;
		this.tellusBlock = tellusBlock;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getJobRole() {
		return jobRole;
	}
	public void setJobRole(String jobRole) {
		this.jobRole = jobRole;
	}
	public String getTellusBlock() {
		return tellusBlock;
	}
	public void setTellusBlock(String tellusBlock) {
		this.tellusBlock = tellusBlock;
	}
	@Override
	public String toString() {
		return "ContactUs [id=" + id + ", name=" + name + ", email=" + email + ", companyName=" + companyName
				+ ", phoneNumber=" + phoneNumber + ", jobRole=" + jobRole + ", tellusBlock=" + tellusBlock + "]";
	}
	
}
