import { portfolioDetailsHeader } from "@/data/portfolioDetails";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { title, image, text, lists, clients, categories } =
  portfolioDetailsHeader;

const PortfolioDetailsHeader = () => {
  return (
    <div className="portfolio-details-header">
      <div className="auto-container clearfix">
        <h2 className="portfolio-details-header__title">{title}</h2>
        <div className="clearfix">
          <div className="portfolio-details-header__image">
            <Image src={image.src} alt="" />
          </div>
        </div>
        <Row className="flex-lg-row-reverse">
          <Col sm={12} md={6}>
            <div className="portfolio-details-header__main-text">{text}</div>
          </Col>
          <Col sm={12} md={6}>
            <Row>
              <Col sm={12} md={6}>
                <h3 className="portfolio-details-header__sub-heading">
                  Project demands:
                </h3>

                <ul className="list-unstyled portfolio-details-header__list">
                  {lists.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
                <h3 className="portfolio-details-header__sub-heading">
                  Launched in 2021:
                </h3>
                <Link href="/" className="portfolio-details-header__link">
                  View Website
                </Link>
              </Col>
              <Col sm={12} md={6}>
                <h3 className="portfolio-details-header__sub-heading">
                  Clients:
                </h3>

                <div className="portfolio-details-header__text">{clients}</div>

                <h3 className="portfolio-details-header__sub-heading">
                  Category:
                </h3>

                <div className="portfolio-details-header__links">
                  {categories.map((category, i) => (
                    <Link href="/" key={i}>
                      {category}
                    </Link>
                  ))}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="portfolio-details-header__separator" />
      </div>
    </div>
  );
};

export default PortfolioDetailsHeader;
