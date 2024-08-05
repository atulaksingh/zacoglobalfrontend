import Link from "next/link";
import React from "react";
import { Row } from "react-bootstrap";
import { Col, Image } from "react-bootstrap";
function ServiceCard1() {
  return (
    <>
      <div className="about-six">
        <div className="about-six__curv">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 122"
          >
            <path
              fill="currentColor"
              d="M0,122.005S80.814,20.129,283.871,2.426C526.255-18.706,550.388,91.2,792.025,102.115c243.565,11.006,299.815-108,520.765-97.662,220.1,10.3,273.86,88.036,415.09,98.26C1878.57,113.62,1920,51.068,1920,51.068V-862.995H0v985Z"
            />
          </svg>
        </div>

        <div className="auto-container">
          <Row className="">
            <Col md={12} lg={6} className="animated fadeInRight ">
              <div className=" w-full">
                <Image
                  src={require(`@/images/zaco/4fc575f927.jpg`).default.src}
                  alt=""
                  className="h-full w-full"
                />
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="about-six__content mx-2 my-4">
                <div className="sec-title-six">
                  {/* <div className="sec-title-six__text">
                    <span>Our Company Benefits</span>
                  </div> */}
                  <h2 className="sec-title-six__title">
                    Expertise in reliable and efficient hardware and software
                    support.
                  </h2>
                </div>
                <div className="about-six__text ">
                Zaco understands how critical IT Support is for your business operations. Our highly-trained IT team delivers prompt responses and best-in-class service to ensure optimal performance of your environments. With over 20 years of experience supporting all major technology brands, we have the expertise to resolve even the most complex issues quickly. You can rely on our technical IT support specialists to keep your systems running smoothly around the clock. We stay abreast of the latest innovations to continuously enhance our capabilities and give you peace of mind knowing that your IT infrastructure is in capable hands.
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default ServiceCard1;
