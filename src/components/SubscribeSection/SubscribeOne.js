import { subscribeOne } from "@/data/subscribeSection";
import React from "react";
import { Col, Row } from "react-bootstrap";

const { title, validate } = subscribeOne;

const SubscribeOne = () => {
  return (
    <div className="subscribe-one">
      <div className="auto-container">
        <Row className="align-items-center">
          <Col md={12} lg={6}>
            <h3 className="subscribe-one__title">{title}</h3>
          </Col>
          <Col md={12} lg={6}>
            <form className="subscribe-one__form">
              <input type="text" placeholder="Enter your email" />
              <button type="submit">
                <i className="far fa-paper-plane"></i>
              </button>
            </form>
            <div className="subscribe-one__validate">{validate}</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SubscribeOne;
