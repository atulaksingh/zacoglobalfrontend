import { aboutSix } from "@/data/aboutSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { tagline, title, text, image, items } = aboutSix;

const AboutSix = () => {
  return (
    <div className="about-six">
      <div className="about-six__curv">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 122"
        >
          <divath
            fill="currentColor"
            d="M0,122.005S80.814,20.129,283.871,2.426C526.255-18.706,550.388,91.2,792.025,102.115c243.565,11.006,299.815-108,520.765-97.662,220.1,10.3,273.86,88.036,415.09,98.26C1878.57,113.62,1920,51.068,1920,51.068V-862.995H0v985Z"
          />
        </svg>
      </div>

      <div className="auto-container">
        <Row>
          <Col md={12} lg={5}>
            <div className="about-six__content">
              <div className="sec-title-six">
                {/* <div className="sec-title-six__text">
                  <span>{tagline}</span>
                </div> */}
                <h2 className="sec-title-six__title">{title}</h2>
              </div>
              <div className="about-six__text">{text}</div>

              <Link href={"/services"} className="" passHref>
                  <button className="theme-btn btn-style-one mt-3">
                    <i className="btn-curve"></i>
                    <span className="btn-title">Explore IT Services </span>
                  </button>
                </Link>
            </div>
          </Col>
          <Col md={12} lg={7} className="animated fadeInRight">
            <div className="about-six__image h-full w-full" style={{width:"100%;",margin:"auto;"}}>
              <Image src={image.src} alt="" width={"95%"} height={"100%"} />
            </div>
          </Col>
        </Row>
        {/* <Row>
          {items.map(({ id, icon, title, text }) => (
            <Col key={id} md={12} lg={4}>
              <div className="about-six__box">
               
                <div>
                <i className={`${icon} about-six__box__icon`}></i>
                <h3 className="about-six__box__title">{title}</h3>
                <p>{text}</p>
                </div>
              </div>

            </Col>
          ))}
        </Row> */}
      </div>
    </div>
  );
};

export default AboutSix;
