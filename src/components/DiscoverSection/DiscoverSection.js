import discoverSection from "@/data/discoverSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { title, discovers } = discoverSection;

const DiscoverSection = ({ ShowTitle = true }) => {
  return (
    <div className="discover-section">
      <div className="auto-container">
        {ShowTitle && (
          <div className="sec-title centered">
            <div style={{fontWeight:"400", fontSize:"53px" , fontWeight:'bold', color:"#222429"}}>
              <TextSplit text={title} />
              {/* <span className="dot">.</span> */}
            </div>
          </div>
        )}
        <Row className="clearfix">
          {discovers.map(({ id,t2 ,image, title }) => (
            <Col key={id} lg={4} md={12} sm={12} className="discover-block">
              <div className="inner-box">
                <div className="image-box">
                  <Image
                    src={require(`@/images/zaco/${image}`).default.src}
                    alt=""
                  />
                </div>
                <div className="cap-box animated fadeInUp">
                  <div className="cap-inner">
                    <div style={{font:"20px", fontWeight:'bold', color:"black"}}>{t2}</div>
                    <div className="cap-text">{title}</div>
                    <div className="more-link">
                      <Link href="/about" passHref>
                          <span className="fa fa-angle-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default DiscoverSection;
