import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";

const SinglePricingTwo = ({ pricing = {} }) => {
  const { amount, name, features, tagline } = pricing;

  return (
    <Col md={12} lg={4}>
      <div className="pricing-two__card">
        <h3 className="pricing-two__amount">${amount}</h3>
        <div className="pricing-two__name">{name}</div>
        <ul className="list-unstyled pricing-two__list">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
        <Link href="/" className="pricing-two__btn thm-btn__seven">
          Choose plan
        </Link>
        <div className="pricing-two__tagline">{tagline}</div>
      </div>
    </Col>
  );
};

export default SinglePricingTwo;
