


import { aboutTen } from "@/data/aboutSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { rentalBenefit, tagline, title3, text, boxes2 } = aboutTen;

const RantleBenefit = () => {
  return (
    <div className="about-ten mb-10 ">
      <div className="auto-container">
        <Row>
          <Col lg={6} className="animated fadeInLeft">
            {/* <div className="about-ten__image">
              <Image src={rentalBenefit.src} alt="" />
            </div> */}
            <div className="">
              <Image
               src={rentalBenefit.src}
                alt=""
                className="w-full  max-w-full"
              />
            </div>
          </Col>
          <Col lg={6} className="d-flex">
            <div className="my-auto">
              <div className="about-ten__content">
                <div className="sec-title-eight text-start">
                  {/* <div className="sec-title-eight__text">{tagline}</div> */}
                  <h2 className="sec-title-eight__title">{title3}</h2>
                </div>
                {/* <div className="about-ten__text">{text}</div> */}
                {boxes2.map(({ id, text, title }) => (
                  <div key={id} className="about-ten__box">
                    {/* <h3 className="about-ten__box__title">{title}</h3> */}
                    <div className="about-ten__box__text">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RantleBenefit;
