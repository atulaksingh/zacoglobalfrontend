import { pricingOne } from "@/data/pricingSection";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const { allFeatures, pricing } = pricingOne;

const PricingOne = () => {
  return (
    <div className="pricing-one">
      <div className="auto-container">
        <Row>
          {pricing.map(({ id, name, icon, amount, features }) => (
            <Col key={id} sm={12} md={12} lg={4}>
              <div className="pricing-card">
                <div className="pricing-card__icon">
                  <i className={icon}></i>
                </div>
                <div className="pricing-card__name">{name}</div>
                <h3 className="pricing-card__amount">${amount}</h3>
                <div className="pricing-card__bottom">
                  <ul className="list-unstyled pricing-card__list">
                    {allFeatures.map((feature, i) => (
                      <li key={i}>
                        <i
                          className={
                            features.includes(feature)
                              ? "flaticon-check"
                              : "flaticon-delete unavailable"
                          }
                        ></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" passHref>
                    <div className="theme-btn btn-style-one">
                      <i className="btn-curve"></i>
                      <span className="btn-title">Choose a plan</span>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PricingOne;
