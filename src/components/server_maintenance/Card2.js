

import { featureEight } from "@/data/featuresSection";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const { image, title, text, barTitle, percent } = featureEight;

const Card2 = () => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <section className="feature-eight">
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
                <div className="dj1">
                <h2>Ready to experience the benefits of reliable server maintenance?</h2> <span className="dot"></span>
                </div>
              </div>
              <p className="feature-eight__text">Contact Zaco Computers today to discuss your specific needs and learn how our comprehensive server maintenance services can help you achieve optimal performance, enhance security and ensure business continuity.</p>
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
    </section>
  );
};

export default Card2;
