import { featureEight } from "@/data/featuresSection";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const { image, title, text,text1,text2,text3,text4, barTitle, percent } = featureEight;

const FeatureEight = () => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <div className="feature-eight">
      <div className="auto-container">
        <Row>
          <Col md={12} lg={5}>
            <div className="feature-eight__image">
              <Image src={image.src} alt="" />
            </div>
          </Col>
          <Col md={12} lg={7}>
            <div className="feature-eight__content">
              <div className="sec-title">
                <h2>
                  {title} <span className="dot">.</span>
                </h2>
              </div>
              <div className="feature-eight__text leading-relaxed">{text}</div>
              <div className="feature-eight__text font-bold my-2 leading-relaxed">{text1}</div>
              <div className="feature-eight__text leading-relaxed my-1">     1. {text2}</div>
              <div className="feature-eight__text leading-relaxed my-1"> 2. {text3}</div>
              <div className="feature-eight__text leading-relaxed my-1"> 3. {text4}</div>
              {/* <div className="feature-eight__text">{text}</div> */}
              {/* <div className="progress-box">
                <div className="bar-title">{barTitle}</div>
                <VisibilitySensor
                  offset={{ top: 10 }}
                  delayedCall={true}
                  onChange={onVisibilityChange}
                >
                  <div className="bar">
                    <div
                      className="bar-inner count-bar counted"
                      style={{ width: `${countStart ? percent : 0}%` }}
                    >
                      <div className="count-box counted">
                        <span className="count-text">
                          <CountUp
                            start={0}
                            end={countStart ? percent : 0}
                            duration={1}
                          />
                        </span>
                        %
                      </div>
                    </div>
                  </div>
                </VisibilitySensor>
              </div> */}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FeatureEight;
