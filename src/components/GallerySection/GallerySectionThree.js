import { gallerySectionThree } from "@/data/gallerySection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { tagline, title, items } = gallerySectionThree;

const GallerySectionThree = () => {
  return (
    <div className="gallery-block-three">
      <div className="auto-container">
        <div className="sec-title-two text-center">
          <div>{tagline}</div>
          <h2>{title}</h2>
        </div>
        <Row>
          {items.map(({ id, title, tagline, image }) => (
            <Col key={id} sm={12} md={6} lg={4}>
              <div className="gallery-item-three">
                <Image
                  src={
                    require(`@/images/update-1-12-2020/projects/${image}`)
                      .default.src
                  }
                  alt=""
                />
                <div className="gallery-item-three__content">
                  <div>{tagline}</div>
                  <h3>
                    <Link href="/portfolio-single" passHref>{title}</Link>
                  </h3>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default GallerySectionThree;
