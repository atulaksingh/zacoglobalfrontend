

import { aboutSectionOne } from "@/data/aboutSection";
import useActive from "@/hooks/useActive";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { networkmaintenanceimg1, networkmaintenanceimg2, title, text1, text2, textList, since } =
  aboutSectionOne;

const Introduction = () => {
  const ref = useActive("#about");

  return (
    <div ref={ref} className="about-section" id="about">
      <div className="auto-container">
        <Row className="clearfix">
          <Col xl={6} lg={12} md={12} sm={12} className="image-column">
            <div className="">
              <div className=" animated fadeInLeft">
                <Image src={networkmaintenanceimg1.src} alt="" />
              </div>
              {/* <div className="image-block animated fadeInUp">
                <Image src={networkmaintenanceimg2.src} alt="" />
              </div> */}
            </div>
          </Col>
          <Col xl={6} lg={12} md={12} sm={12} className="text-column my-auto">
            <div className="inner">
              <div className="sec-title">
                <div className="dj1">
                  <TextSplit text={"YOUR TRUSTED PARTNER FOR IT NETWORK MAINTENANCE SERVICES"} />
                  <span className="dot"></span>
                </div>
                {/* <div className="lower-text">{text1}</div> */}
                <div className="text clearfix mt-4 text-justify">At Zaco Computers, we understand the critical importance of a robust and reliable IT network for businesses operating across the globe. Our Network Maintenance and Support Services are designed to ensure seamless connectivity, optimal performance and maximum uptime for your organization&apos;s IT infrastructure.</div>
              </div>
              {/* <div className="text">
                <div>{text2}</div>
              </div>
              <div className="text clearfix">
                <ul>
                  {textList.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
                <div className="since">
                  <span className="txt">
                    Since <br />
                    {since}
                  </span>
                </div>
              </div> */}
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

export default Introduction;
