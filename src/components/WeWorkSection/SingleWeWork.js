import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const SingleWeWork = ({ work = {}, current }) => {
  const { id, image, text1, text2, lists } = work;

  return (
    <div
      className={`tab animated${current === id ? " active-tab fadeInUp" : ""}`}
      id={id}
    >
      <Row className="clearfix">
        <Col lg={5} md={6} sm={12} className="image-col">
          <div className="inner">
            <div className="image">
              <Image
                src={require(`@/images/resource/${image}`).default.src}
                alt=""
              />
            </div>
          </div>
        </Col>
        <Col lg={7} md={6} sm={12} className="text-col">
          <div className="inner">
            <div className="content">
              <div className="text">
                <div>{text1}</div>
                <div className="theme_color">{text2}</div>
                <ul>
                  {lists.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SingleWeWork;
