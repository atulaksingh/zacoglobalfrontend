import fluidSection from "@/data/fluidSection";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const FluidSection = () => {
  return (
    <div className="fluid-section">
      <div className="outer-container">
        <Row className="clearfix">
          {fluidSection.map(({ id, title, href, btnClassName, bg }) => (
            <Col key={id} lg={6} md={12} sm={12} className="column">
              <div className="inner">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: `url(${
                      require(`@/images/background/${bg}`).default.src
                    })`,
                  }}
                ></div>
                <div className="content-box">
                  <h3>{title}</h3>
                  <div className="link-box">
                    <Link href={href} passHref>
                      <div className={`theme-btn ${btnClassName}`}>
                        <i className="btn-curve"></i>
                        <span className="btn-title">Discover More</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FluidSection;
