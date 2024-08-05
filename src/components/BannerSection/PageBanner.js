import Link from "next/link";
import React from "react";
import bg from "@/images/zaco/ABOUTUS/ABOUT-US-banner.png";
const PageBanner = ({
  title = "",
  page = "",
  parent = "",
  parentHref = "/",
  // BnImage
}) => {
  // console.log("bg",hello)
  return (
    <div className="page-banner">
      <div
        className="image-layer"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="shape-1"></div>
      <div className="shape-2"></div>
      <div className="banner-inner">
        <div className="auto-container">
          <div className="inner-container clearfix">
            <h1>{title}</h1>
            <div className="page-nav">
              <ul className="bread-crumb clearfix">
                <li>
                  <Link href="/index-main" passHref>Home</Link>
                </li>
                {parent && (
                  <li>
                    <Link href={parentHref} passHref>{parent}</Link>
                  </li>
                )}
                <li className="active">{page || title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
