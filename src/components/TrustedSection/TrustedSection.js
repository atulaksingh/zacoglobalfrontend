import trustedSection from "@/data/trustedSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { title, features, title2, text, textList, image, text2 } =
  trustedSection;

const TrustedSection = () => {
  return (
    <div className="trusted-section">
      <div className="auto-container">
        <div className="outer-container">
          <Row className="clearfix">
            <Col xl={5} lg={6} md={12} sm={12} className="left-col">
              <div className="inner">
                <div className="col-header">
                  <div className="header-inner">
                    <span>{title}</span>
                  </div>
                </div>
                <div className="features">
                  {features.map(({ id, title, subtitle }) => (
                    <div key={id} className="feature">
                      <div className="count">
                        <span>0{id}</span>
                      </div>
                      <h3 className="text-[26px]">{title}</h3>
                      <div className="sub-text">{subtitle}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col xl={7} lg={6} md={12} sm={12} className="right-col">
              <div className="inner">
                <div className="sec-title">
                  {/* <h2 class="sec-title-six__title">Empowering Your IT Journey</h2> */}
                  {/* <div class="sec-title-six"><div class="sec-title-six__text"></div><h2 class="sec-title-six__title">{title2}</h2></div> */}
                  <h2>
                    {title2}
                    {/* <span className="dot">.</span> */}
                  </h2>
                  <div className="lower-text">{text}</div>
                  <div className="">{text2}</div>
                </div>
                <div className="featured-block-two clearfix">
                  <div className="image">
                    <Image src={image.src} alt="" />
                  </div>
                  <div className="text">
                    <ul>
                      {textList.map((text, i) => (
                        <li key={i}>{text}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link href={"/ims"} passHref>
                  <button className="theme-btn btn-style-one mt-4">
                    <i className="btn-curve"></i>
                    <span className="btn-title">
                    Read More </span>
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
