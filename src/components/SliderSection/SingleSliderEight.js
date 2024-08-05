import Link from "next/link";
import React from "react";

const SingleSliderEight = ({ slide = {} }) => {
  const { bg, text, title } = slide;
// console.log("bg",bg)
  return (
    <div className="swiper-slide">
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      ></div>
      <div className="auto-container">
        <div className="slider-eight__content">
          <div className="slider-eight__text">
            <span>{text}</span>
          </div>
          <h1 className="slider-eight__title">{title}</h1>
          <div className="slider-eight__btns">
            {/* <Link href="/"   className="slider-eight__btn slider-eight__btn--two thm-btn__eight">
            Contact Now

            </Link> */}
            {/* <div
              className="slider-eight__btn slider-eight__btn--two thm-btn__eight"
            >
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSliderEight;
