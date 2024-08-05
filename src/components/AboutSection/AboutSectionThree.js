import { aboutSectionThree } from "@/data/aboutSection";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const {
  image,
  title,
  subtitle,
  text,
  text2,
  text3,
  text4,
  lists,
  barTitle,
  barPercent,
  aboutPerson: { name, tagline, image: personImage },
} = aboutSectionThree;

const AboutSectionThree = () => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <div className="about-section-three">
      <div className="auto-container my-auto">
        <Row>
          <Col md={12} lg={6}>
            <div className="about-section-three__image h-full">
              <Image src={image.src} alt="" height={"100%"} style={{height:"100%"}}/>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="about-section-three__content">
              {/* <div className="sec-title-two text-left">
                <div>{subtitle}</div>
                <h2>{title}</h2>
              </div> */}
              <div className="sec-title-six">
                <div className="sec-title-six__text">
                  {/* <span>{subtitle}</span> */}
                </div>
                <h2 className="sec-title-six__title">{title}</h2>
              </div>

              <div className="about-section-three__summery text-justify">
                <div>{text}</div>
                <div>{text2}</div>
                {/* <div>{text3}</div>
                <div>{text4}</div> */}
             
          <div className="text-justify">
            Through proactive IT maintenance and remote management tools, we
            help predict and prevent potential problems before they impact you.
            This allows your teams to focus on growth without worrying about
            infrastructure reliability in different locations and time zones.
            Whenever and wherever you need us, our global coverage has you
            covered. You can swiftly rely on Zaco Computers to keep your
            international IT Infrastructure Managed services running smoothly.
          </div>
        <Link href={"/about"} passHref>
          <button className="theme-btn btn-style-one mt-4">
            <i className="btn-curve"></i>
            <span className="btn-title">Read More</span>
          </button>
        </Link>
              </div>
              {/* <ul className="list-unstyled about-section-three__list">
                {lists.map((text, i) => (
                  <li key={i}>
                    <i className="fa fa-check-circle"></i>
                    {text}
                  </li>
                ))}
              </ul> */}
              {/* <div className="progress-box">
                <div className="bar-title">{barTitle}</div>
                <ReactVisibilitySensor
                  offset={{ top: 10 }}
                  delayedCall={true}
                  onChange={onVisibilityChange}
                >
                  <div className="bar">
                    <div
                      className="bar-inner count-bar"
                      style={{ width: countStart ? `${barPercent}%` : 0 }}
                    >
                      <div
                        style={{ opacity: countStart ? 1 : 0 }}
                        className="count-box"
                      >
                        <span className="count-text">
                          <CountUp
                            start={0}
                            end={countStart ? barPercent : 0}
                            duration={1}
                          />
                        </span>
                        %
                      </div>
                    </div>
                  </div>
                </ReactVisibilitySensor>
              </div> */}
              {/* <div className="about-section-three__name">
                <Image src={personImage.src} alt="" />
                <h3>{name}</h3>
                <div>{tagline}</div>
              </div> */}
              {/* <Link href={"/about"}>
                  <button className="theme-btn btn-style-one mt-2">
                    <i className="btn-curve"></i>
                    <span className="btn-title">ReadMore</span>
                  </button>
                </Link> */}
            </div>
          </Col>
        </Row>
      </div>
      {/* <div className="px-3 lg:px-0 lg:mx-9">
        <div className=" mt-3">
          <div className="text-justify">
            Through proactive IT maintenance and remote management tools, we
            help predict and prevent potential problems before they impact you.
            This allows your teams to focus on growth without worrying about
            infrastructure reliability in different locations and time zones.
            Whenever and wherever you need us, our global coverage has you
            covered. You can swiftly rely on Zaco Computers to keep your
            international IT Infrastructure Managed services running smoothly.
          </div>
        </div>
        <Link href={"/about"}>
          <button className="theme-btn btn-style-one mt-4">
            <i className="btn-curve"></i>
            <span className="btn-title">Read More</span>
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default AboutSectionThree;
