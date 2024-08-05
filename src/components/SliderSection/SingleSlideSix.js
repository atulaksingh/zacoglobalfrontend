import React from "react";
import { SwiperSlide } from "swiper/react";
import TextSplit from "../Reuseable/TextSplit";
import Link from "next/link";

const SingleSlideSix = ({ slide = {} }) => {
  const { bg, text, title } = slide;

  return (
    <SwiperSlide>
      <div
        className="image-layer"
        
        // style={{
        //   backgroundImage: `url(${
        //     require(`@/images/zaco/${bg}`).default.src
        //   })`,
        // }}
      > <video style={{width:"100%"}} src={require('../../../public/Video.mp4')} autoPlay muted loop /></div>

      <div className="auto-container">
        <div className="slider-six__content">
          <div className="slider-six__text">
            <span>{text}</span>
          </div>
          <h1 className="slider-six__title">
            <TextSplit text={title} />
          </h1>
          <Link  href="/about" className="slider-six__btn thm-btn__six">
            Discover More
          </Link>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default SingleSlideSix;
