

import { featureEight } from "@/data/featuresSection";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const { netorksupport, title, text, barTitle, percent } = featureEight;

const Support = () => {
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
              <Image src={netorksupport.src} alt="" />
            </div>
          </Col>
          <Col md={12} lg={7}>
            <div className="feature-eight__content">
              <div className="sec-title">
                <div className="dj1">
                Why Choose Zaco for IT Network Support & Services? <span className="dot"></span>
                </div>
              </div>
              <p className="feature-eight__text text-justify">With our presence in multiple countries, including India, the United Kingdom and the UAE, we offer<strong> global network support services </strong> to businesses worldwide. Our team brings years of experience and in-depth expertise in managing and supporting IT networks of all sizes and complexities. We take a proactive approach to network maintenance, ensuring potential issues are identified and resolved before they impact your business operations. Whether you need assistance during business hours or require any emergency support after working hours, our team is available round-the-clock to address your networking-related concerns. Partner with Zaco for reliable, efficient and cost-effective network maintenance support and services that empower your business to thrive in today&apos;s digital landscape.</p>
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

export default Support;
