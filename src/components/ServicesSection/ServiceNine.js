import { serviceNine } from "@/data/servicesSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const ServiceNine = () => {
  return (
    <div className="service-nine">
      <div className="auto-container">
        <Row>
          {serviceNine.map(({ id, icon, title, href, image, text }) => (
            <Col key={id} md={6} lg={4}>
              <div className="service-nine__card">
                <div className="service-nine__card__inner">
                  <div className="service-nine__image">
                    <Image
                      src={
                        require(`@/images/update-01-10-2021/services/${image}`)
                          .default.src
                      }
                      alt=""
                    />
                  </div>
                  <div className="service-nine__content">
                    <div className="service-nine__icon">
                      <i className={icon}></i>
                    </div>
                    <h3 className="service-nine__title">
                      <Link href={href} passHref>{title}</Link>
                    </h3>
                    <div className="service-nine__text">{text}</div>
                    <Link href={href} passHref>
                      <div className="service-nine__link">
                        <i className="fa fa-angle-right"></i>
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

export default ServiceNine;
