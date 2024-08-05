"use client";

import { aboutSeven } from "@/data/aboutSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { images } = aboutSeven;

const ItBusiness = ({ canadaData }) => {
  const { title, text ,img} = canadaData;
  return (
    <section className="about-seven">
      <div className="auto-container">
        <Row>
          <Col md={12} lg={6} className="animated fadeInLeft">
            <div className="about-seven__images">
              {/* {images.map((image, i) => ( */}
                <Image  src={img.src} alt="" />
              {/* ))} */}
            </div>
          </Col>
          <Col md={12} lg={6} className="my-auto">
            <div className="about-seven__content">
              <div className="sec-title-six text-start">
                <h2 className="sec-title-six__title">{title}</h2>
              </div>
              <p className="about-seven__summery">
               {text}
              </p>

              {/* <Link href="/about" passHref>
                <div className="about-seven__btn thm-btn__six">
                  Discover More
                </div>
              </Link> */}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ItBusiness;
