import React from "react";
import { Col } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import Link from "next/link";
import { GrHostMaintenance } from 'react-icons/gr';
const SingleServiceOne = ({ service = {} }) => {
  const {  icon: IconComponent, href, title } = service;

  return (
    <Col
      xl={3}
      lg={6}
      md={6}
      sm={12}
      className="service-block animated fadeInLeft"
    >
      <div className="inner-box">
        <div className="bottom-curve"></div>
        <div className="icon-box">
          {/* <span className={icon}></span> */}
          {/* <icon icon={icon} /> */}
          <IconComponent   />
          <div>
          {/* <GrHostMaintenance /> */}
          </div>
        </div>
        <h6>
          <Link href={href} passHref>
            <TextSplit text={title} />
          </Link>
        </h6>
      </div>
    </Col>
  );
};

export default SingleServiceOne;
