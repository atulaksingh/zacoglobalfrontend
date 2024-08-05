import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

const FormBox = ({ inputs = [], apiUrl }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const data = {};
    inputs.forEach(({ name }) => (data[name] = formData.get(name)));
    console.log(data);

    try {
      const response = await axios.post("http://127.0.0.1:8000/contact/", data);
      // console.log("Response:", response.data);
      e.target.reset();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-box">
      <div className="sec-title">
        <h2>Write Us a Message</h2>
      </div>
      <div className="default-form">
        <form onSubmit={handleSubmit} id="contact-form">
          <Row className="clearfix">
            {inputs.map(({ name, type, placeholder, required }) => (
              <Col
                key={name}
                lg={type ? 6 : 12}
                md={type ? 6 : 12}
                sm={12}
                className="form-group"
              >
                <div className="field-inner">
                  {type ? (
                    <input
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      required={required}
                    />
                  ) : (
                    <textarea
                      name={name}
                      placeholder={placeholder}
                      required={required}
                    ></textarea>
                  )}
                </div>
              </Col>
            ))}
            <Col lg={12} md={12} sm={12} className="form-group">
              <button className="theme-btn btn-style-one" disabled={loading}>
                <i className="btn-curve"></i>
                <span className="btn-title">
                  {loading ? "Loading..." : "Send message"}
                </span>
              </button>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default FormBox;
