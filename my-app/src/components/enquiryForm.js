import React, { useState } from "react";
import enquiryService from "../components/services/EnquiryService";
import "./enquiry-form.css";

export default function EnquiryForm() {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    companySize: "",
    jobRole: "",
    description: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    enquiryService
      .createEnquiry(inputs)
      .then((res) => {
        console.log(res.data);
        this.setInputs("");
      })
      .catch((error) => {
        console.log("error");
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-6 my-4 mx-auto hire-talent">
          <form onSubmit={handleSubmit}>
            <div className="row my-4 mx-auto hire-talent">
              <div class="form-group col-12">
                <label for="fullName" className="text-white">
                  Full Name*
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your name"
                  value={inputs.fullName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div class="form-group col-12">
                <label for="email" className="text-white">
                  Email *
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your business email"
                  value={inputs.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div class="form-group col-12">
                <label for="companyName" className="text-white">
                  Company Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="companyName"
                  name="companyName"
                  placeholder="Enter your company name"
                  value={inputs.companyName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div class="form-group col-6">
                <label for="phoneNumber" className="text-white">
                  Phone Number *
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your mobile number"
                  value={inputs.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-6 company-size">
                <label for="companySize" className="text-white">
                  Company Size
                </label>
                <select
                  class="form-select"
                  name="companySize"
                  value={inputs.companySize}
                  onChange={handleChange}
                >
                  <option selected>Enter your company size</option>
                  <option value="50-250 Employees">50-250 Employees</option>
                  <option value="250-500 Employees">250-500 Employees</option>
                  <option value="500+ Employees">500+ Employees</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div class="form-group col-12">
                <label for="jobRole" className="text-white">
                  Your Job Role
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="jobRole"
                  name="jobRole"
                  placeholder="Technology"
                  value={inputs.jobRole}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div class="form-group col-12">
                <label for="description" className="text-white">
                  Tell us about your Tech Talent requirements nad we will get
                  back to you with the best!
                </label>
                <textarea
                  class="form-control description"
                  id="description"
                  name="description"
                  rows="3"
                  value={inputs.description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn btn-secondary"
                style={{ marginBottom: "14px" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
