import featuredSection from "@/data/featuredSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { image1,image2,image3,image4, title, text, text2, features } = featuredSection;

const WhyChooseUs = ({ className = "" }) => {
  return (
    <div className={`featured-section ${className}`}>
      <div className="auto-container">
        <Row className="row clearfix">
          <Col lg={6} md={12} sm={12} className="left-col">
            <div className="inner animated fadeInLeft">
              <div className="image-box">
                <Image src={image1.src} alt="" />
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="right-col">
            <div className="inner">
              <div className="sec-title" >
                <h2 className="" >We Shape IT Support and Services to Perfection</h2>
                <div className="lower-text ">
                  Through exceptional service and continuous learning, we craft
                  IT hardware solutions perfectly suited to our customers&apos;
                  unique needs. Our highly-trained IT solutions team is
                  committed to delivering an unmatched customer experience while
                  also pursuing new skills and knowledge that allow us to
                  develop even more innovative solutions over time. When you
                  partner with Zaco, you gain more than just reliable IT support
                  services - you gain experts dedicated to optimizing your
                  systems and processes to their fullest potential.
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="py-7">
          <Row className="row clearfix">
            <Col lg={6} md={12} sm={12} className="right-col my-auto">
              <div className="inner ">
                <div className="sec-title">
                  <h2>Expert IT Support Services for Your Business</h2>
                  <div className="lower-text ">
                    Whether you need assistance with servers, networks, or
                    software, our team of IT hardware experts provide quick
                    remote and on-site IT support services for businesses
                    globally. Leveraging cutting-edge tools and 24/7 monitoring,
                    we deliver tailored IT support for your business to optimize
                    performance, maximize uptime and simplify management of
                    complex IT infrastructure.
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6} md={12} sm={12} className="left-col">
              <div className="inner animated fadeInLeft">
                <div className="image-box">
                  <Image src={image3.src} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="py-7">
          <Row className="row clearfix">
            <Col lg={6} md={12} sm={12} className="left-col">
              <div className="inner animated fadeInLeft">
                <div className="image-box">
                  <Image src={image2.src} alt="" />
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} className="right-col my-auto">
              <div className="inner">
                <div className="sec-title">
                  <h2>Remote IT Support for Businesses Globally</h2>
                  <div className="lower-text ">
                    No matter where your teams are located, we ensure seamless
                    systems access and remote IT support through secure remote
                    connectivity options. Our virtual support programs provide
                    customized IT support and troubleshooting to keep your
                    mission-critical applications running smoothly across
                    borders.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="py-7">
          <Row className="row clearfix">
            <Col lg={6} md={12} sm={12} className="right-col my-auto">
              <div className="inner ">
                <div className="sec-title">
                  <h2>Efficient Global IT Support for Businesses</h2>
                  <div className="lower-text ">
                    Through flexible Service Level Agreements, we offer
                    comprehensive multi-vendor support packages that protect
                    technology investments around the world. Partner with Zaco
                    for optimized and cost-effective management of hardware,
                    software, and IT support needs for all your international
                    locations.
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} className="left-col">
              <div className="inner animated fadeInLeft">
                <div className="image-box">
                  <Image src={image4.src} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
