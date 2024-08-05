import { bannerFour } from "@/data/bannerSection";
import Link from "next/link";
import React from "react";
import TextSplit from "../Reuseable/TextSplit";

const { dayRange, timeRange, socials, title, text } = bannerFour;

const BannerFour = () => {
  return (
    <div className="banner-four">
      <div className="banner-four__info">
        <span>{dayRange}</span>
        <span>{timeRange}</span>
      </div>
      <div className="banner-four__social">
        {socials.map(({ id, href, icon }) => (
          <Link key={id} href={href} passHref>
            <i className={icon}></i>
          </Link>
        ))}
      </div>
      <div className="auto-container">
        <h2 className="banner-four__title">
          <TextSplit text={title} />
        </h2>
        <div className="banner-four__text">
          {text} <Link href="/about" passHref>html template</Link>
        </div>

        <div
         
          className="scroll-to-target banner-four__scroll"
        >
          <i className="linoor-icon-dots-menu"></i>
        </div>
      </div>
    </div>
  );
};

export default BannerFour;
