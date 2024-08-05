import { aboutSectionOne } from "@/data/aboutSection";
import useActive from "@/hooks/useActive";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { BUSIimg1, BUSIimg2, title, text1, text2, textList, since } =
  aboutSectionOne;

const IndexReliableIT = () => {
  const ref = useActive("#about");

  return (
    <div ref={ref} className="about-section" id="about">
      <div className="auto-container">
        <Row className="clearfix">
          <Col xl={6} lg={12} md={12} sm={12} className="image-column">
            <div className="inner">
              <div className="image-block animated fadeInLeft">
                <Image src={BUSIimg1.src} alt="" />
              </div>
              <div className="image-block animated fadeInUp">
                <Image src={BUSIimg2.src} alt="" />
              </div>
            </div>
          </Col>
          <Col xl={6} lg={12} md={12} sm={12} className="text-column">
            <div className="inner">
              <div className="sec-title">
             

                <div className="dj1  ">
                  <h2>Reliable IT Services & Infrastructure Support Wherever You Do Business</h2>
                    {/* className=""
                    text={
                      ""
                    }
                  /> */}
                  <span className="dot"></span>
                </div>
                {/* <div className="lower-text">{text1}</div> */}
                {/* <div className="text clearfix mt-4 text-justify">
                  At Zaco Computers, we understand the dynamic needs of
                  businesses operating in today&apos;s globalized environment.
                  To support your growth and agility, we offer comprehensive{" "}
                  <strong> server rental services </strong>designed to cater to
                  your specific requirements, no matter your location.
                </div> */}
                <div className="text clearfix mt-4 ">
                  As a global business, you need an IT partner you can depend on
                  wherever your operations take you. At Zaco Computers, we
                  provide Infrastructure Managed Services to help multinational
                  companies run their IT seamlessly across borders. Our experts
                  monitor your servers, networks and hardware round the clock
                  24x7 from our multiple support centers. With a large server
                  spare parts inventory, we&apos;re able to resolve issues
                  quickly to minimize disruptions. Customizable IT support plans
                  tailored to your specific business needs ensure optimal
                  performance and compliance with various global regulations.
                </div>
                <div className="text clearfix mt-1 ">
                  Through proactive IT maintenance and remote management tools,
                  we help predict and prevent potential problems before they
                  impact you. This allows your teams to focus on growth without
                  worrying about infrastructure reliability in different
                  locations and time zones. Whenever and wherever you need us,
                  our global coverage has you covered. You can swiftly rely on
                  Zaco Computers to keep your international IT Infrastructure
                  Managed services running smoothly.
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
              <div className="link-box pt-0">
                <Link href="/about" passHref>
                  <div className="theme-btn btn-style-one">
                    <i className="btn-curve"></i>
                    <span className="btn-title">Read More</span>
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

export default IndexReliableIT;
