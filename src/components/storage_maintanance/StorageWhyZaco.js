

import { aboutTen } from "@/data/aboutSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import whyUs from "@/data/whyUs";
const { serverStorageimg3, tagline, title2, text, boxes1 } = aboutTen;
// const { image, title, features, videoId } = whyUs;
const StorageWhyZaco = () => {
  return (
    <div className="about-ten mb-14 mt-14">
      <div className="auto-container">
        <Row>
          <Col lg={6} className="animated fadeInLeft my-auto">
         
            <div className="">
              <Image
               src={serverStorageimg3.src}
                alt=""
                className="w-full  max-w-full"
              />
            </div>
          </Col>
          <Col lg={6} className="d-flex">
            <div className="my-auto">
              <div className="about-ten__content">
                <div className="sec-title-eight text-start">
                  <h2 className="sec-title-eight__title">{title2}</h2>
                </div>
                {boxes1.map(({ id, text, title }) => (
                  <div key={id} className="about-ten__box">
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

export default StorageWhyZaco;
