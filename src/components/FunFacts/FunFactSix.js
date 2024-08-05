import { funFactSix } from "@/data/funFacts";
import React from "react";
import { Col, Row } from "react-bootstrap";
import VisibilityCountUp from "../VisibilityCountUp/VisibilityCountUp";

const FunFactSix = () => {
  return (
    <div className="funfact-six">
      <div className="auto-container">
        <Row>
          {funFactSix.map(({ id, icon, text, count }) => (
            <Col key={id} sm={12} md={6} lg={3}>
              <div className="funfact-six__item">
                <i className={`funfact-six__icon ${icon}`}></i>
                <h3 className="funfact-six__count count-box">
                  <span className="count-text">
                    <VisibilityCountUp count={count} />
                  </span>
                </h3>
                <div className="funfact-six__text">{text}</div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FunFactSix;
