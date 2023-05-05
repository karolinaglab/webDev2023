import React, { useState } from "react";
import "./index.css";
import FormInput from "../../components/formInput";
import Button from "../../components/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    service: "",
  });

  const [errors, setErrors] = useState({
    firstName: null,
    lastName: null,
    phoneNumber: null,
    service: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {
      firstName: formData.firstName === "" ? "Name is required" : null,
      lastName: formData.lastName === "" ? "Last Name is required" : null,
      phoneNumber:
        formData.phoneNumber === "" ? "Phone Number is required" : null,
      service: formData.service === "" ? "Service is required" : null,
    };

    setErrors(errors);

    const hasErrors = Object.values(errors).some((error) => error !== null);
    return !hasErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      console.log(formData);
    }
  };

  return (
    <div className="contact">
    <div className="container">
      <div className="column">
        <h2>Contact</h2>
        <p className="section-text">
          Questions or concerns? Just fill out the form below and our support
          team will get back to you within 24 hours
        </p>
      </div>
      <div className="column">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <FormInput
              type={"text"}
              name={"firstName"}
              placeholder={"First Name"}
              error={errors.firstName}
              value={formData.firstName}
              onChange={handleChange}
            />
            <FormInput
              type={"text"}
              name={"lastName"}
              placeholder={"Last Name"}
              error={errors.lastName}
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="row contactFormInput">
            <FormInput
              type={"text"}
              name={"phoneNumber"}
              placeholder={"Phone Number"}
              error={errors.phoneNumber}
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="row contactFormInput">
            <FormInput
              type="text"
              name="service"
              placeholder="What Service are you interested in?"
              error={errors.service}
              value={formData.service}
              onChange={handleChange}
            />
          </div>
          <div className="row contactFormInput">
            <Button type="submit">Submit Now</Button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
