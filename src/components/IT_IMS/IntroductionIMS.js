


import { aboutSectionOne } from "@/data/aboutSection";
import useActive from "@/hooks/useActive";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { imsintro1, imsintro2, title, text1, text2, textList, since } =
  aboutSectionOne;

const IntroductionIMS = () => {
  const ref = useActive("#about");

  return (
    <div ref={ref} className="about-section" id="about">
      <div className="auto-container">
        <Row className="clearfix">
          <Col xl={6} lg={12} md={12} sm={12} className="image-column">
            <div className="">
              <div className=" animated fadeInLeft">
                <Image src={imsintro1.src} alt="" />
              </div>
              {/* <div className="image-block animated fadeInUp">
                <Image src={imsintro2.src} alt="" />
              </div> */}
            </div>
          </Col>
          <Col xl={6} lg={12} md={12} sm={12} className="text-column my-auto">
            <div className="inner">
              <div className="sec-title">
                <div className="dj1">
                  <TextSplit text="IT Infrastructure Managed Services " />
                  <span className="dot"></span>
                </div>
                <div className="text clearfix mt-4 ">In today’s fast-paced business environment, a robust and well-managed IT infrastructure is essential for organizations to thrive. At Zaco Computers Private Limited, we specialize in providing comprehensive<strong> IT Infrastructure Managed Services (IMS)</strong> that empower businesses to optimize resources.</div>
                <div className="text clearfix mt-4 ">Our IMS covers a wide spectrum of proactive and strategic activities aimed at administering and optimizing your organization’s data and information infrastructure. A well-managed IT infrastructure isn’t just about hardware and software-it’s about empowering your business to thrive in the digital age.</div>
              </div>
        
              <div className="">
                <Link href="/about" passHref>
                  <div className="theme-btn btn-style-one">
                    <i className="btn-curve"></i>
                    <span className="btn-title">Discover More</span>
                  </div>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default IntroductionIMS;
