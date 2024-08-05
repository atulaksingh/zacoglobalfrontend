import { sponsorEight } from "@/data/sponsorsSection";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay]);

const options = {
  spaceBetween: 100,
  slidesPerView: 5,
//   autoplay: { delay: 5000 },
  breakpoints: {
    0: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    375: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    575: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    767: {
      spaceBetween: 50,
      slidesPerView: 4,
    },
    991: {
      spaceBetween: 50,
      slidesPerView: 5,
    },
    1199: {
      spaceBetween: 100,
      slidesPerView: 1,
    },
  },
};

const Dj2 = () => {
  return (
    <div className="abn" style={{height:"10%"}}>
      <div className="" style={{height:"10%"}}>
        <Swiper {...options} className="thm-swiper__slider" style={{height:"10%"}}>
          <div className="swiper-wrapper">
            {sponsorEight.map((image, i) => (
              <SwiperSlide key={i}>
                <div style={{position:"relative" ,width:"100%" , height:"100%"}}>

                <Image src={image.src} alt="" />
                <div style={{position:"absolute", width:"100%" , height:"100%", top:"50%",left:"50%", color:"white"}}>

                <div>  <div className="">
                  <Link href="/about" passHref>
                    <div className="theme-btn btn-style-three">Discover More</div>
                  </Link>
                </div></div>
                </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Dj2;
