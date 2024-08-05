


import { aboutMeOne } from "@/data/aboutSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { image, title, text, text2, text3, socials, certificates } = aboutMeOne;

const RantleWhy = () => {
  return (
    <div className="about-me-one">
      <div className="auto-container">
        <Row>
       
          <Col md={12} lg={6}>
            <div className="about-me-one__content ">
              <div className="sec-title">
                <h2>
                  Why Choose Zaco for Server Rental?
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
              <div className="about-me-one__text \ mt-2">Choose from an extensive range of servers on rent, including physical dedicated servers, from all leading OEM brands like Dell, HP, IBM, Cisco and much more. Scale your server resources up or down seamlessly, based on your evolving business demands. Also enjoy the benefits of using powerful servers without the upfront investment costs associated with purchasing hardware. Our server rental services are available across various regions, ensuring consistent support and IT infrastructure wherever you operate. We offer flexible server rental terms on DELL, HP, IBM and Cisco that cater to short-term and long-term projects. Our server rental services are available in various configurations and can be customized to meet your specific needs. You can also benefit from our team of experienced professionals who can assist you in selecting the right server rental solution and provide ongoing technical support.</div>
       
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
          <Col md={12} lg={6}>
            <div className="about-me-one__image mt-5">
              <Image src={image.src} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RantleWhy;
