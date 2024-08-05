import React from "react";
import { Col } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import Link from "next/link";
import { GrHostMaintenance } from 'react-icons/gr';




const SingleService = ({ service = {} }) => {
  const { icon, title, text } = service;

  return (

    <>
    
    <Col xl={3} lg={6} md={6} sm={12} className="service-block-two ">
      <div className="inner-box animated fadeInUp  ">
        <div className="bottom-curve"></div>
        <div className="icon-box">
          <span className={icon}></span>
          {/* <GrHostMaintenance />  */}
        </div>
        <h5>
          <Link href="/" passHref>
            {/* <div></div> */}
            <TextSplit text={title} />
          </Link>
        </h5>
        <div className="text">{text}</div>
        <div className="link-box">
          <Link href="/ " passHref>
            <span className="fa fa-angle-right"></span>
          </Link>
        </div>
      </div>
    </Col>





    
    </>
  );
};

export default SingleService;














