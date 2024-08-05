import { Row } from "react-bootstrap";
import whyChooseUsData from "@/data/aboutSection";
import SingleTestimonial from "../TestimonialsSection/SingleTestimonial";
import WhyChooseCard from "./WhyChooseCard";
import React, { forwardRef } from "react";
const { testimonials } = whyChooseUsData;

const WhyChooseUs = (
  { testimonial = {}, className = "", userSelect = false },
  ref
) => {
  return (
    <div className="testimonials-section testimonials-page">
      <div className="auto-container">
        <div className="sec-title-eight text-center">
          {/* <div className="sec-title-eight__text">{tagline}</div> */}
          <h2 className="sec-title-eight__title">WHY CHOOSE US</h2>
        </div>
        {/* <h2 className="sec-title-eight__title">WHY CHOOSE US</h2> */}
        <Row className="clearfix py-10">
          <div
            // ref={ref}
            className="testi-block animated fadeInLeft col-lg-6 col-md-12 col-sm-12"
            style={{ userSelect: userSelect ? "auto" : "none" }}
          >
            <div className="inner">
              <div className="info">
                <div className="name">Multi-vendor support</div>
              </div>
              <div className="text " style={{ paddingBottom: "6px" }}>
                As a provider of IT solutions across hardware brands, we have
                the expertise to manage IT infrastructure and support for all
                major OEMs. Through flexible service level agreements, we offer
                comprehensive support packages for multiple OEMs that protect
                your IT hardware investments. Our maintenance and support
                services allow for multi-vendor management from a single
                provider.
              </div>
            </div>
          </div>
          <div
            // ref={ref}
            className="testi-block animated fadeInLeft col-lg-6 col-md-12 col-sm-12"
            style={{ userSelect: userSelect ? "auto" : "none" }}
          >
            <div className="inner">
              <div className="info">
                <div className="name">
                  Distributor of Data Center Equipment
                </div>
              </div>
              <div className="text">
                Zaco is a one-stop destination for all your data center
                infrastructure needs. Whether you need new standardized
                equipment or hard-to-find legacy hardware, Zaco sources from a
                vast inventory of high-quality IT assets/hardware globally. Our
                team of experts can help you procure, deploy, and support the
                right mix of hardware and software solutions for your unique
                environment.
              </div>
            </div>
          </div>
          <div
            // ref={ref}
            className="testi-block animated fadeInLeft col-lg-12 col-md-12 col-sm-12"
            style={{ userSelect: userSelect ? "auto" : "none" }}
          >
            <div className="inner">
              <div className="info">
                <div className="name">Overall IT Solution Provider</div>
              </div>
              <div className="text">
                Zaco is a complete IT solutions service provider. We work
                closely with our customers from the initial planning phase to
                the final implementation and beyond. Through our consultative
                approach and software support services, we fully manage projects
                to meet organizations&apos; strategic goals within budget and
                timelines. Our customized, end-to-end solutions prioritize
                quality, value and flexibility. Backed by industry-leading
                expertise, we ensure clients have access to the right
                innovations at each stage of their digital transformation
                journey.
              </div>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default WhyChooseUs;
// className = "animated fadeInLeft col-lg-6 col-md-12 col-sm-12";
// userSelect;
