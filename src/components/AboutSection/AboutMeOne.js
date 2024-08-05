import { aboutMeOne } from "@/data/aboutSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { ITHwhy, title, text, text2, text3, socials, certificates } = aboutMeOne;

const AboutMeOne = () => {
  return (
    <div className="about-me-one">
      <div className="auto-container">
        <Row>
          <Col md={12} lg={6}>
            <div className="about-me-one__image">
              <Image src={ITHwhy.src} alt="" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="about-me-one__content">
              <div className="sec-title">
                <h2>
                  {title}
                  {/* <span className="dot">.</span> */}
                </h2>
              </div>
              {/* <div className="about-me-one__social">
                {socials.map(({ id, icon, href }) => (
                  <Link key={id} href={href} passHref>
                    <i className={icon}></i>
                  </Link>
                ))}
              </div> */}
              <div className="about-me-one__text lg:mt-5">{text}</div>
              <div className="about-me-one__text">{text2}</div>
              <div className="about-me-one__text">{text3}</div>
              {/* <Row className="about-me-one__certificate-row">
                {certificates.map((image, i) => (
                  <Col key={i} md={6}>
                    <Image
                      src={
                        require(`@/images/update-26-02-2021/resources/${image}`)
                          .default.src
                      }
                      alt=""
                    />
                  </Col>
                ))}
              </Row> */}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutMeOne;
