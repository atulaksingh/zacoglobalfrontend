import { serviceSectionThree } from "@/data/servicesSection";
import React from "react";
import { Col, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import Link from "next/link";

const ServiceSectionThree = () => {
  return (
    <div className="service-block-three">
      <div className="auto-container">
        <Row>
          {serviceSectionThree.map(({ id, icon, title, href }) => (
            <Col key={id} sm={12} md={6} lg={4} className="animated fadeInLeft">
              <div className="service-block-three__single">
                <div className="icon-box">
                  <span className={icon}></span>
                </div>
                <h6>
                  <Link href={href} passHref>
                    <TextSplit text={title} />
                  </Link>
                </h6>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ServiceSectionThree;
