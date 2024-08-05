import { testimonialsSix } from "@/data/testimonialsSection";
import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TextSplit from "../Reuseable/TextSplit";
import bg from "@/images/zaco/4454.jpg"
import { Image } from "react-bootstrap";
import { aboutEleven } from "@/data/aboutSection";
import Link from "next/link";
const {
  images,
  tagline,
  title,
  text,
  boxes,
  progressTitle,
  percent,
  // image,
  name,
  infoText,
} = aboutEleven;

SwiperCore.use([Autoplay, Pagination]);

const options = {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: "#testimonials-six-pagination",
    type: "bullets",
    clickable: true,
  },
  autoplay: { delay: 2000 },
};

const TestimonialsSix = () => {
  return (
    // <div className="testimonials-six">
    //   <div className="auto-container">
    //     <Swiper {...options} className="thm-swiper__slider">
    //       <div className="swiper-wrapper">
    //         {testimonialsSix.map(({ id, name, text, subtitle }) => (
    //           <SwiperSlide key={id}>
    //             <div className="testimonials-six__item">
    //               <div className="testimonials-six__content">
    //                 <TextSplit text={text} />
    //               </div>
    //               <div className="testimonials-six__meta">
    //                 <span>{name}</span>
    //                 <span>{subtitle}</span>
    //               </div>
    //             </div>
    //           </SwiperSlide>
    //         ))}
    //       </div>
    //       <div
    //         className="swiper-pagination"
    //         id="testimonials-six-pagination"
    //       ></div>
    //     </Swiper>
    //     <hr />
    //   </div>
    // </div>
    <div className="testimonials-six " >
      <div className="">
        <Swiper {...options} className="thm-swiper__slider lg:h-[550px] "
        //  style={{height:"500px"}}
         >
          <div className="swiper-wrapper">
            {/* {testimonialsSix.map(({ id, name, text, subtitle }) => ( */}
            <SwiperSlide >
              <div className="relative w-full h-full" >
                <Image src={
                  
                  require(`@/images/zaco/4454.jpg`)
                    .default.src
                    
                }alt="" />
                <div className="absolute w-full h-full text-white top-[35%]"
                //  style={{ position: "absolute", width: "100%", height: '100%', color: "white", top: "35%", left: "" }}
                 >
                  <div className="text-7xl font-bold pb-3"
                  //  style={{fontSize:"75px" , fontWeight:"bold",paddingBottom:"40px"}}
                   >
                 Zaco Store
                  </div>
                  <div className="button-wrap">
                    <Link href="/about" passHref>
                      <div className="theme-btn btn-style-three">Visit our Store</div>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="relative w-full h-full" >
                <Image src={
                  require(`@/images/zaco/4454.jpg`)
                    .default.src
                } alt="" />
                <div className="absolute w-full h-full text-white top-[35%]"
                //  style={{ position: "absolute", width: "100%", height: '100%', color: "white", top: "35%", left: "" }}
                 >
                  <div className="text-7xl font-bold "
                  //  style={{fontSize:"75px" , fontWeight:"bold",paddingBottom:"40px"}}
                   >
                 Zaco Store
                  </div>
                  <div className="button-wrap">
                    <Link href="/about" passHref>
                      <div className="theme-btn btn-style-three">Visit our Store</div>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="relative w-full h-full" >
                <Image src={
                  require(`@/images/zaco/4454.jpg`)
                    .default.src
                } alt="" />
                <div className="absolute w-full h-full text-white top-[35%]"
                 style={{ position: "absolute", width: "100%", height: '100%', color: "white", top: "35%", left: "" }}
                 >
                  <div className="text-7xl font-bold "
                   style={{fontSize:"75px" , fontWeight:"bold",paddingBottom:"40px"}}
                   >
                 Zaco Store
                  </div>
                  <div className="button-wrap">
                    <Link href="/about" passHref>
                      <div className="theme-btn btn-style-three">Visit Our Store</div>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* ))} */}
          </div>
          <div
            className="swiper-pagination"
            id="testimonials-six-pagination"
          ></div>
          
        </Swiper>
        <hr />
      </div>
    </div>
  );
};

export default TestimonialsSix;
