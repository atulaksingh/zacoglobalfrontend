import { sponsorSix } from "@/data/sponsorsSection";
import React from "react";
import { Image } from "react-bootstrap";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Row } from "react-bootstrap";
SwiperCore.use([Autoplay]);

const options = {
  spaceBetween: 100,
  slidesPerView: 3,
  autoplay: { delay: 3000 },
  loop:true,
  breakpoints: {
    0: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    375: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    575: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    767: {
      spaceBetween: 50,
      slidesPerView: 4,
    },
    991: {
      spaceBetween: 50,
      slidesPerView: 3,
    },
    1199: {
      spaceBetween: 10,
      slidesPerView: 3,
    },
  },
};

const AboutUspCard = () => {

  return (

    <section className="gallery-block-three">
      <div className="auto-container">
        {/* <div className="sec-title-two text-center">
          <p>tagline</p>
          <h2>title</h2>
        </div> */}
        {/* <div class="sec-title-six centered">
          <span>tagline</span>
          <h2 class="sec-title-six__title">title</h2>
        </div> */}
        <div className="sec-title-six centered"><h2 className="sec-title-six__title">Our USP
        </h2></div>
        <Row >
          {/* {items.map(({ id, title, tagline, image }) => ( */}
          <Col >
            <Swiper {...options} className="thm-swiper__slider">


              <SwiperSlide >
                <div className="gallery-item-three ">
                  <Image
                    src={
                      require(`@/images/zaco/a1.jpg`)
                        .default.src
                    }
                    alt=""
                  />
                  <div className="gallery-item-three__content">
                    {/* <p>tagline</p> */}
                    <h3>
                      <div>IT HARDWARE SOLUTION & SERVICES</div>
                    </h3>
                  </div>
                </div>


              </SwiperSlide>
              <SwiperSlide >
                <div className="gallery-item-three ">
                  <Image
                    src={
                      require(`@/images/zaco/Server-Maintenance.webp`)
                        .default.src
                    }
                    alt=""
                  />
                  <div className="gallery-item-three__content">
                  
                    <h3>
                      <div>Server Maintenance Services</div>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="gallery-item-three ">
                  <Image
                    src={
                      require(`@/images/zaco/Storage-Maintenance (1).webp`)
                        .default.src
                    }
                    alt=""
                  />
                  <div className="gallery-item-three__content">
                   
                    <h3>
                      <div>Storage Maintenance Services</div>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="gallery-item-three ">
                  <Image
                    src={
                      require(`@/images/zaco/Network-Maintenance-Services.webp`)
                        .default.src
                    }
                    alt=""
                  />
                  <div className="gallery-item-three__content">
                   
                    <h3>
                      <div>Network Maintenance Services & Support</div>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="gallery-item-three ">
                  <Image
                    src={
                      require(`@/images/zaco/7727.jpg`)
                        .default.src
                    }
                    alt=""
                  />
                  <div className="gallery-item-three__content">
                   
                    <h3>
                      <div>Server Rental</div>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="gallery-item-three ">
                  <Image
                    src={
                      require(`@/images/zaco/7727.jpg`)
                        .default.src
                    }
                    alt=""
                  />
                  <div className="gallery-item-three__content">
                   
                    <h3>
                      <div>Infrastructure Managed Services (IMS)</div>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

          </Col>
          {/* ))} */}
        </Row>
      </div>
    </section>

  );
};

export default AboutUspCard;
