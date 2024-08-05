

import { aboutTen } from "@/data/aboutSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { image,  } = aboutTen;

const CanadaCard4 = ({CanadaDataCard4}) => {
  const { title, text ,img} = CanadaDataCard4;
  return (
    <section className="about-ten">
      <div className="auto-container">
        <Row>
     
          <Col lg={6} className="d-flex">
            <div className="my-auto">
              <div className="about-ten__content">
                <div className="sec-title-eight text-start">
                  {/* <p className="sec-title-eight__text">{tagline}</p> */}
                  <h2 className="sec-title-eight__title">
                   {title}
                  </h2>
                </div>
                <p className="about-ten__box__text">
               {text}
                </p>
               
              </div>
            </div>
          </Col>
          <Col lg={6} className="animated fadeInLeft">
          <div className="">
              <Image
                src={img.src}
                alt=""
                className="w-full  max-w-full"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CanadaCard4;
