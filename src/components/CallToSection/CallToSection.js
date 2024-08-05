import Link from "next/link";
import React from "react";

const CallToSection = ({ className = "", container = true }) => {
  return (
    <div className={`call-to-section ${className}`}>
      <div className={container ? "auto-container" : "inner clearfix"}>
        <div className={container ? "inner clearfix" : ""}>
          <div className="shape-1 animated slideInRight"></div>
          <div className="shape-2 animated fadeInDown"></div>
          <div className={container ? "" : "auto-container clearfix"}>
            <div className="flex-wrap">
              <h2>
                {/* Let&apos;s Get Your Project {container ? <br /> : ""}
              Started! */}
                Search Our EOSL Library Today
              </h2>
              <div className="link-box n-hs-right">
                {/* <Link href="/contact" passHref>
                <div className="theme-btn btn-style-two">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Contact with us</span>
                </div>
              </Link> */}
                {/* <form action="/eosl" method="get" className="w-auto">
                <input id="s" maxLength="140" name="searcheosl" className="w-80 sm:w-96"  type="text" placeholder="Search by hardware or model..." />
                <button type="submit" value=""></button>
              </form> */}
                <div className="link-box">
                  <Link href="/eosl" passHref>
                    <div className={`theme-btn btn-style-two`}>
                      <i className="btn-curve"></i>
                      <span className="btn-title">Search Here</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToSection;
