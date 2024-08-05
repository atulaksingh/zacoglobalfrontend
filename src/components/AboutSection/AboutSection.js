import { aboutSectionOne } from "@/data/aboutSection";
import useActive from "@/hooks/useActive";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { image1, image2, title, text1, text2, textList, since } =
  aboutSectionOne;

const AboutSection = () => {
  const ref = useActive("#about");

  return (
    <div ref={ref} className="about-section" id="about">
      <div className="auto-container">
        <Row className="clearfix">
          <Col xl={6} lg={12} md={12} sm={12} className="image-column">
            <div className="">
              <div className=" animated fadeInLeft">
                <Image src={image1.src} alt="" />
              </div>
              {/* <div className="image-block animated fadeInUp">
                <Image src={image2.src} alt="" />
              </div> */}
            </div>
          </Col>
          <Col xl={6} lg={12} md={12} sm={12} className="text-column my-auto">
            <div className="inner">
              <div className="sec-title">
                <div className="dj1">
                  {/* <TextSplit text={title} /> */}
                  <h2>{title}</h2>
                  <span className="dot"></span>
                </div>
                {/* <div className="lower-text">{text1}</div> */}
                <div className="text clearfix mt-4 ">
                  At Zaco Computers, we understand the vital role servers play
                  in the smooth operation of your business. That&apos;s why we
                  offer
                  <span className="font-bold">
                    comprehensive server maintenance services
                  </span>
                  designed to keep your servers running efficiently, securely
                  and reliably. Whether you have a single server or a complex
                  network infrastructure, our team of highly skilled and
                  certified IT engineers is equipped to provide the support you
                  need to achieve optimal performance with minimize downtime.
                </div>
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

export default AboutSection;
