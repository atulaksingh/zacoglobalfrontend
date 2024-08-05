import { aboutEleven } from "@/data/aboutSection";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";

const {
  images,
  tagline,

} = aboutEleven;

const TrustedIt = ({CanadaDataTIT}) => {
  const { title, text ,img} = CanadaDataTIT;
  // console.log("hhh",img)
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <div className="about-eleven">
      <div className="auto-container">
        <Row>
          <Col lg={6}>
            <div className="about-eleven__images animated fadeInLeft">
              {/* {images.map((image, i) => ( */}
                <Image
                  // key={i}
                  src={img.src}
                  alt=""
                />
              {/* ))} */}
            </div>
          </Col>
          <Col lg={6} className="my-auto">
            <div className="about-eleven__content">
              <div className="sec-title-eight text-start">
                {/* <div className="sec-title-eight__text">{tagline}</div> */}
                <h2 className="sec-title-eight__title">
                 {title}
                </h2>
              </div>
              <div className="about-eleven__summery justify-center">
               {text}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TrustedIt;
