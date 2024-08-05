import liveSection from "@/data/liveSection";
import Link from "next/link";
import React, { useState } from "react";
import TextSplit from "../Reuseable/TextSplit";
import VideoModal from "../VideoModal/VideoModal";

const { secTitle, bg, videoId, title } = liveSection;

const LiveSection = ({ className = "" }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={`live-section ${className}`} style={{paddingBlock:"100px"}}>
        <div className="auto-container">
          <div className="sec-title-six text-center">
            <h2 className="sec-title-six__title">
              {secTitle}
              {/* <span className="dot"></span> */}
            </h2>
          </div>
          <div className="main-image-box">
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${bg.src})` }}
            ></div>
            <div className="inner clearfix">
              <div className="round-box animated fadeInUp">
                <div className="round-inner">
                  <div className="vid-link">
                    <div onClick={() => setOpen(true)} className="lightbox-image">
                      <div className="icon">
                        <span className="flaticon-play-button-1"></span>
                        <i className="ripple"></i>
                      </div>
                    </div>
                  </div>
                  <div className="title">
                    <h3>
                      <TextSplit text={title} />
                    </h3>
                  </div>
                  <div className="more-link">
                    <Link href="/about" passHref>Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default LiveSection;
