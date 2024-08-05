



import weDOSection from "@/data/weDOSection";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import VisibilitySensor from "react-visibility-sensor";
import TextSplit from "../Reuseable/TextSplit";
import bg from "@/images/zaco/NETWORK-SUPPORT-AND-MAINTENANCE/Our-Network-Maintenance-Services-Include.png";
const { title2, featuredImage, text, barTitle, barPercent, faqs5, } =
  weDOSection;
function ServiceCard() {
  const [countStart, setCountStart] = useState(false);
  const [currentFaq, setCurrentFaq] = useState(1);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };
  return (
    <>
      <section className="we-do-section">
        <div className="auto-container">
          <div className="sec-title-eight text-center">
            <h2 className="sec-title-eight__title pb-14">Our Network Maintenance Services Include </h2>
          </div>
          <Row className="clearfix">
 
            <Col lg={6} md={12} sm={12} className="right-col">
              <div className="inner">
                <div className="faq-box">
                  <ul className="accordion-box clearfix">
                    {faqs5.map(({ id, title, text }) => (
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
              <div className="h-full">
                <Image
                  src={
                    bg.src
                  }
                  alt=""
                  className=""
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>


   
    </>
  );
}

export default ServiceCard;
