import { testimonialsSectionThree } from "@/data/testimonialsSection";
import React from "react";
import { Row } from "react-bootstrap";
import SingleTestimonialsThree from "./SingleTestimonialsThree";

const { tagline, title, testimonials } = testimonialsSectionThree;

const TestimonialsSectionThree = () => {
  return (
    <div className="testi-block-three">
      <div className="auto-container">
        <div className="sec-title-two text-center">
          <div>{tagline}</div>
          <h2>{title}</h2>
        </div>
        <Row>
          {testimonials.map((testimonial) => (
            <SingleTestimonialsThree
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default TestimonialsSectionThree;
