import { portfolioDetailsVideo } from "@/data/portfolioDetails";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import VideoModal from "../VideoModal/VideoModal";
import Link from "next/link";

const { image, videoId } = portfolioDetailsVideo;

const PortfolioDetailsVideo = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="portfolio-details-video">
        <div className="auto-container">
          <div className="portfolio-details-video__thumbnail">
            <Image src={image.src} alt="" />
            <div className="vid-link">
              <Link onClick={() => setOpen(true)} className="lightbox-image">
                <div className="icon">
                  <span className="flaticon-play-button-1"></span>
                  <i className="ripple"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default PortfolioDetailsVideo;
