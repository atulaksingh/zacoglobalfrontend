

import { aboutSectionOne } from "@/data/aboutSection";
import useActive from "@/hooks/useActive";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { serverStorageimg1, serverStorageimg2, title, text1, text2, textList, since } =
  aboutSectionOne;

const StorageIntroduction = () => {
  const ref = useActive("#about");

  return (
    <div ref={ref} className="about-section" id="about">
      <div className="auto-container">
        <Row className="clearfix">
          <Col xl={6} lg={12} md={12} sm={12} className="image-column">
            <div className="">
              {/* <div className="image-block animated fadeInLeft"> */}
              <div className=" animated fadeInLeft">
                <Image src={serverStorageimg1.src} alt="" />
              </div>
              {/* <div className="image-block animated fadeInUp">
                <Image src={serverStorageimg2.src} alt="" />
              </div> */}
            </div>
          </Col>
          <Col xl={6} lg={12} md={12} sm={12} className="text-column">
            <div className="inner">
              <div className="sec-title">
                <div className="dj1">
                  <TextSplit text={"Expert Storage Maintenance Solutions - Maximizing Performance and Reliability"} />
                  <span className="dot"></span>
                </div>
                {/* <div className="lower-text">{text1}</div> */}
                <div className="text clearfix mt-4 text-justify">In today&apos;s interconnected world, your data is your business&apos;s lifeblood. Ensuring its safety and accessibility is paramount, no matter where you operate. At Zaco, we understand the unique challenges of managing storage systems across borders. That&apos;s why we offer comprehensive storage maintenance services and solutions designed to keep your data secure, accessible and optimized, regardless of your location.</div>
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
              {/* <div className="link-box"> */}
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

export default StorageIntroduction;
