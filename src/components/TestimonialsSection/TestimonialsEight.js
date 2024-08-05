import { testimonialsEight } from "@/data/testimonialsSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { tagline, title, testimonials } = testimonialsEight;

const TestimonialsEight = () => {
  return (
    <div className="testimonials-eight">
      <div className="auto-container">
        <div className="sec-title-eight text-center">
          <div className="sec-title-eight__text">{tagline}</div>
          <h2 className="sec-title-eight__title">{title}</h2>
        </div>
        <Row>
          {testimonials.map(({ id, text, image, name, designation }) => (
            <Col key={id} md={12} lg={4} className="animated fadeInUp">
              <div className="testimonials-eight__card">
                <div className="testimonials-eight__stars">
                  {Array.from(Array(5)).map((_, i) => (
                    <i key={i} className="fa fa-star"></i>
                  ))}
                </div>
                <div className="testimonials-eight__text">{text}</div>
                <div className="testimonials-eight__info">
                  <div className="testimonials-eight__image">
                    <Image
                      src={
                        require(`@/images/update-01-10-2021/resources/${image}`)
                          .default.src
                      }
                      alt=""
                    />
                  </div>
                  <div className="testimonials-eight__meta">
                    <h3 className="testimonials-eight__name">{name}</h3>
                    <div className="testimonials-eight__designation">
                      {designation}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default TestimonialsEight;
