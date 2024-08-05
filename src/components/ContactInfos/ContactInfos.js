import contactInfos from "@/data/contactInfos";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import Link from "next/link";

const { year, author, dayRanges, address, email, phone } = contactInfos;

const ContactInfos = () => {
  return (
    <div className="contact-infos">
      <div className="auto-container">
        <Row>
          <Col sm={12} md={6} lg={3}>
            <div>
              {dayRanges.map((day, i) => (
                <Fragment key={i}>
                  {day} <br />
                </Fragment>
              ))}
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div>
              <TextSplit text={address} />
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div>
              <Link href={`mailto:${email}`} passHref>{email}</Link> <br />{" "}
              <Link href={`tel:${phone.split(" ").join("-")}`} passHref>{phone}</Link>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div>
              © copyright {year} by <br />
              {author}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactInfos;
