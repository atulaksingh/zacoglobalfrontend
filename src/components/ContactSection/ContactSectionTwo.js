import { contactSectionTwo } from "@/data/contactSection";
import React, { useState, useRef } from "react";
import { Col, Row } from "react-bootstrap";

const { title } = contactSectionTwo;

const ContactSectionTwo = () => {
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false); // Add loading state
  const formRef = useRef(null); // Create a ref for the form

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.get("name")) errors.name = "Name is required";
    if (!formData.get("company")) errors.company = "Company is required";
    if (!formData.get("location")) errors.location = "Location is required";
    if (!formData.get("contact") || isNaN(formData.get("contact")))
      errors.contact = "Valid contact number is required";
    if (!formData.get("email") || !/\S+@\S+\.\S+/.test(formData.get("email")))
      errors.email = "Valid email is required";
    if (!formData.get("message")) errors.message = "Message is required";
    if (!formData.get("file")) errors.file = "File is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/itad/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        // console.log('Form submitted successfully:', data);

        formRef.current.reset();
        setFormErrors({});
      } else {
        const errorData = await response.json();
        // console.error('Form submission error:', errorData);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-section contact-two">
      <div className="auto-container">
        <Row>
          <Col lg={6}>
            <div className="contact-two__content">
              <div className="sec-title">
                <h2 className="font-bold">{title}</h2>
              </div>
              <div className="contact-two__text mb-2">
                As technology advances, organizations are often left managing
                large volumes of aging or obsolete IT equipment that have
                reached end of life. From servers to storages, and networking
                gear, outdated assets need to be retired properly according to
                regulations through IT asset disposition (ITAD) services.
              </div>
              <div className="contact-two__text">
                Zaco&apos;s comprehensive IT asset disposition services provide
                a solution to help clients worldwide safely and sustainably
                dispose of all types of outdated IT assets. With over 15 years
                of experience in ITAD, we have the expertise and global
                infrastructure to handle large-scale ITAD projects.
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="form-box mt-4">
              <div className="default-form">
                <form onSubmit={handleSubmit} id="contact-form" ref={formRef}>
                  <Row className="clearfix">
                    <Col lg={6} md={6} sm={12} className="form-group">
                      <div className="field-inner mb-3">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name*"
                          required
                        />
                        {formErrors.name && (
                          <p className="error">{formErrors.name}</p>
                        )}
                      </div>
                      <div className="field-inner mb-3">
                        <input
                          type="text"
                          name="company"
                          placeholder="Company*"
                          required
                        />
                        {formErrors.company && (
                          <p className="error">{formErrors.company}</p>
                        )}
                      </div>
                      <div className="field-inner">
                        <input
                          type="text"
                          name="location"
                          placeholder="Location/City"
                          required
                        />
                        {formErrors.location && (
                          <p className="error">{formErrors.location}</p>
                        )}
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="form-group">
                      <div className="field-inner mb-3">
                        <input
                          type="number"
                          name="contact"
                          placeholder="Contact*"
                          required
                        />
                        {formErrors.contact && (
                          <p className="error">{formErrors.contact}</p>
                        )}
                      </div>
                      <div className="field-inner mb-3">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email*"
                          required
                        />
                        {formErrors.email && (
                          <p className="error">{formErrors.email}</p>
                        )}
                      </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} className="form-group">
                      <div className="field-inner">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          required
                        ></textarea>
                        {formErrors.message && (
                          <p className="error">{formErrors.message}</p>
                        )}
                      </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} className="">
                      <div className="field-inner mb-3">
                        <input
                          type="file"
                          name="file"
                          accept=".docx,.xlsx,.pdf"
                          required
                        />
                        <p className="text-[0.9rem] text-gray-500">
                          Accepted file types: .docx, .xlsx, .pdf
                        </p>
                        {formErrors.file && (
                          <p className="error">{formErrors.file}</p>
                        )}
                      </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} className="form-group">
                      {loading ? (
                        <button
                          type="button"
                          className="theme-btn btn-style-one flex items-center justify-center"
                          disabled
                        >
                          <i className="btn-curve"></i>
                          <span className="btn-title">Submitting...</span>
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="theme-btn btn-style-one"
                        >
                          <i className="btn-curve"></i>
                          <span className="btn-title">Submit</span>
                        </button>
                      )}
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactSectionTwo;
