

import weDOSection from "@/data/weDOSection";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import VisibilitySensor from "react-visibility-sensor";
import TextSplit from "../Reuseable/TextSplit";
import bg from "@/images/zaco/IMS/ppl-laughing.jpg";
const { title2, featuredImage, text, barTitle, barPercent, faqs9, faqs8 } =
  weDOSection;
function ImsWhyOpt1() {
  const [countStart, setCountStart] = useState(false);
  const [currentFaq, setCurrentFaq] = useState(1);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };
  return (
    <>
      <section className="we-do-section mb-[90px]">
        <div className="auto-container">
        
 


          <Row className="clearfix">
          <Col lg={6} md={12} sm={12} className="right-col my-auto">
              <div className="inner">
                <div className="faq-box">
                  <ul className="accordion-box clearfix">
                    {faqs9.map(({ id, title, text }) => (
                      <li
                        key={id}
                        className={`accordion block${
                          currentFaq === id ? " active-block" : ""
                        }`}
                      >
                        <div
                          onClick={() => setCurrentFaq(id)}
                          className={`acc-btn${
                            currentFaq === id ? " active" : ""
                          }`}
                        >
                          <span className="count">{id}.</span> {title}
                        </div>
                        <div
                          className={`acc-content animated${
                            currentFaq === id ? " current slideInUp" : ""
                          }`}
                        >
                          <div className="content">
                            <div className="text">{text}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} className="left-col ">
              <div className="mt-2">
                <Image
                  src={
                   bg.src
                  }
                  alt=""
                  className="h-[21rem] w-full"
                />
              </div>
            </Col>
         
          </Row>
        </div>
      </section>
    </>
  );
}

export default ImsWhyOpt1;
