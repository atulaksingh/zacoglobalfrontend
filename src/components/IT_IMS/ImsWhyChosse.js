import weDOSection from "@/data/weDOSection";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import VisibilitySensor from "react-visibility-sensor";
import TextSplit from "../Reuseable/TextSplit";
import { Bg } from "react-flags-select";
import bg from "@/images/zaco/IMS/VMware.png";
import bg1 from "@/images/zaco/IMS/new.jpg";
const { title2, featuredImage, text, barTitle, barPercent, faqs2, faqs7 } =
  weDOSection;
function ImsWhyChosse() {
  const [countStart, setCountStart] = useState(false);
  const [currentFaq, setCurrentFaq] = useState(1);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };
  return (
    <>
      <section className="we-do-section">
        <div className="auto-container">
          <div className="sec-title-eight text-center">
            <h2 className="sec-title-eight__title lg:pb-14">
            Why Choose Zaco for your VMware Virtualization, Red Hat Linux, Microsoft Windows, Microsoft Azure, Cyber Security and Veeam Tasks?
            </h2>
          </div>
          <Row className="clearfix">
            <Col lg={6} md={12} sm={12} className="left-col ">
              <div className="h-full">
                <Image
                  src={
                    bg.src
                  }
                  alt=""
                  className="h-full"
                />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} className="right-col">
              <div className="inner">
                <div className="faq-box">
                  <div className="text ">
                    Unlock the full potential of your IT infrastructure with our
                    dedicated team of IT hardware experts. At Zaco, we bring a
                    wealth of experience along with our rich expertise. We are
                    into VMware, Red Hat, Microsoft Windows, Microsoft Azure,
                    Seceon (Cyber security solutions) and Veeam (Backup
                    solution).
                  </div>
                  <div className="text ">
                    Our portfolio encompasses a wide range of diverse projects,
                    including long-term, short-term and one-time solutions.
                    These range from VMware vSphere - Virtualization, Cloud
                    setup, Cloud management, Windows & Linux installations, and
                    Windows administration to Active Directory management. We’re
                    equipped to handle all your IT Infrastructure Managed
                    Services (IMS) needs. Whether providing desktop and
                    laptop-managed services or maintaining and managing your
                    critical servers, our solutions are provided in the shortest
                    Turnaround Time (TAT) possible. IT Services are carried out
                    at a reasonable price. Contracts are also customized SLAs as
                    per your requirements. Our team has successfully executed
                    multiple such projects.
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="clearfix lg:my-10">
            
            <Col lg={6} md={12} sm={12} className="right-col  my-auto">
              <div className="inner">
                <div className="faq-box my-auto">
                  <div className="text ">
                  Our Cybersecurity solution prevents <strong>99% of cyberattacks</strong>. Your systems need to be security-ready for Ransomware, Trojans, etc. If your system is not secured with the required solution, it might cost you dearly.
                  </div>
                  <div className="text ">
                  We provide a one-stop solution which is a complete IT Infrastructure Management Solution in terms of co-locating servers (including maintenance services) with managed services of the above-mentioned software. The entire hardware and software management responsibility is on us.
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} className="left-col ">
              <div className="mt-2 h-72">
                <Image
                  src={
                   bg1.src
                  }
                  alt=""
                  className="h-[19rem] w-full"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default ImsWhyChosse;
