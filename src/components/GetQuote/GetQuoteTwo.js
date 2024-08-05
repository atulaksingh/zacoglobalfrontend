import { getQuoteTwo } from "@/data/getQuote";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import MapSix from "../MapSection/MapSix";
import GetQuotefour from "./GetQuotefour";
import dg from '@/images/zaco/Server-Maintenance.webp'

const GetQuoteTwo = ({ className = "" }) => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
 
  return (
    <div className={`get-quote-two ${className}`}>
      <div className="auto-container">
        <Row className="clearfix">
          <Col lg={6} md={12} sm={12} className="left-col">

            {/* <MapSix /> */}
       
            <div className="news-two__image h-full">
              <Image
                src={require(`@/images/zaco/homepage/GET-IN-TOUCH.png`).default.src}
                className="h-full"
                alt="GET-IN-TOUCH"
              />
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="right-col">

            <GetQuotefour />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GetQuoteTwo;
