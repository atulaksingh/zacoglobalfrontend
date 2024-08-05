import { aboutEight } from "@/data/aboutSection";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";
// import AboutEightProgress from "./AboutEightProgress";

const { icon, title, titleHighlight, text, progresses, image } = aboutEight;

const AboutEight = () => {
  return (
    <div className="about-eight">
      <div className="auto-container">
        <Row>
          <Col lg={6}>
            <div className="about-eight__content">
              <div className="about-eight__icon">
                <i className={icon}></i>
              </div>
              <h3 className="about-eight__title">
                {title.split(" ").map((t, i) => (
                  <Fragment key={i}>
                    {t === titleHighlight ? <span>{t}</span> : t}{" "}
                  </Fragment>
                ))}
              </h3>
              <div className="about-eight__summery">{text}</div>

              {/* <div className="about-eight__progress-wrap">
                {progresses.map((progress) => (
                  <LinkboutEightProgress key={progress.id} progress={progress} />
                ))}
              </div> */}
              <Link href="/" className="about-eight__btn thm-btn__seven" passHref>
                Get Started
              </Link>
            </div>
          </Col>
          <Col lg={6} className="animated fadeInRight">
            <div className="about-eight__image">
              <Image src={image.src} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutEight;
