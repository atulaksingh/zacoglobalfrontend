import { faqsSection } from "@/data/faqsSection";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const Faqs = ({ allFaqs = {} }) => {
  const { faqs, defaultCurrent } = allFaqs;
  const [current, setCurrent] = useState(defaultCurrent);

  return (
    <Col lg={12} md={12} sm={12} className="faq-block">
      <ul className="accordion-box clearfix">
        {faqs.map(({ id, title, text }) => (
          <li
            key={id}
            className={`accordion block${
              current === id ? " active-block" : ""
            }`}
          >
            <div
              onClick={() => setCurrent(id)}
              className={`acc-btn${current === id ? " active" : ""}`}
            >
              <span className="count">{id}.</span>
              {title}
            </div>
            <div
              className={`acc-content animated${
                current === id ? " current slideInUp" : ""
              }`}
            >
              <div className="content">
                <div className="text">{text}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Col>
  );    
};

const FaqsSection = () => {
  return (
    <div className="faqs-section">
      <div className="auto-container">
        <Row className="clearfix">

        <div className="sec-title centered"><h2>IT Equipment BuyBack Benefits<span className="dot"></span></h2></div>
          {faqsSection.map((allFaqs) => (
            <Faqs key={allFaqs.id} allFaqs={allFaqs} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FaqsSection;
