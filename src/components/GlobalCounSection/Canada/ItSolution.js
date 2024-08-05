

import { aboutSix } from "@/data/aboutSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { tagline, image,  } = aboutSix;

const ItSolution = ({CanadaDataITS}) => {
  const { title, text , img } = CanadaDataITS;
  return (
    <section className="about-six">
      <div className="auto-container">
        <Row>
          <Col md={12} lg={5}>
            <div className="about-six__content">
              <div className="sec-title-six">
                <h2 className="sec-title-six__title">
                 {title}
                </h2>
              </div>
              <div className="about-six__text">
                {" "}
              {text}
              </div>
            </div>
          </Col>
          <Col md={12} lg={7} className="animated fadeInRight m-auto ">
            <div className="about-six__image ">
              <Image
                src={img.src}
                alt=""
                className="h-80 lg:h-96"
              />
            </div>
          </Col>
        </Row>
        {/* <Row>
          {items.map(({ id, icon, title }) => (
            <Col key={id} md={12} lg={4}>
              <div className="about-six__box">
                <i className={`${icon} about-six__box__icon`}></i>
                <h3 className="about-six__box__title">{title}</h3>
              </div>
            </Col>
          ))}
          @/images/update-01-10-2021/resources/about-six-1-1.jpg
        </Row> */}
      </div>
    </section>
  );
};

export default ItSolution;
