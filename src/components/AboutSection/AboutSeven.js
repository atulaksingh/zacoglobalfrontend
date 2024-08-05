import { aboutSeven } from "@/data/aboutSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { images, tagline, title, text, title2, lists } = aboutSeven;

const AboutSeven = () => {
  return (
    <div className="about-seven">
      <div className="auto-container">
        <Row>
          <Col md={12} lg={6} className="animated fadeInLeft my-auto">
            <div className="">
              {images.map((image, i) => (
                <Image key={i} src={image.src} alt="" />
              ))}
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="about-seven__content">
              <div className="sec-title-six text-start">
                <div className="sec-title-six__text">
                  {/* <span>{tagline}</span> */}
                </div>
                <h2 className="sec-title-six__title">IT Lifecycle Management</h2>
              </div>
              <div className="about-seven__summery mt-3">
                At Zaco, we believe every IT asset has a meaningful journey. Our
                approach to IT Lifecycle Management encompasses six vital
                phases: planning, purchasing, deployment, maintenance,
                replacement, and recycling. Each stage reflects our commitment
                to quality and sustainability. From the thoughtful planning of
                IT needs and the careful selection of technology, to the
                seamless deployment and ongoing maintenance, we ensure optimal
                performance. As assets reach their end-of-life, our responsible
                recycling practices ensure a minimal environmental footprint. At
                Zaco, we manage not just technology, but the entire lifecycle,
                with a human touch and a vision for a sustainable future.
              </div>

              {/* <Link href="/about" passHref>
                <div className="about-seven__btn thm-btn__six">
                  Discover More
                </div>
              </Link> */}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutSeven;
