import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { year, author, logo7, about2, socials, links, email, phone, address } =
  mainFooter;

const FooterSeven = () => {
  return (
    <>
      <footer className="footer-seven">
        <div className="auto-container">
          <Row>
            <Col md={6} lg={3}>
              <div className="footer-seven__widget footer-seven__about">
                <Link href="index-main.html" passHref>
                  <Image src={logo7.src} width={134} alt="" />
                </Link>
                <div className="footer-seven__about__text">
                  <Link href={`tel:${phone.split(" ").join("-")}`} passHref>{phone}</Link>{" "}
                  <br />
                  <Link href={`mailto:${email}`} passHref>{email}</Link> <br />
                  <TextSplit text={address} />
                </div>
              </div>
            </Col>
            <Col md={6} lg={2}>
              <div className="footer-seven__widget footer-seven__links">
                <h3 className="footer-seven__title">Explore</h3>
                <ul className="list-unstyled footer-seven__links__list">
                  {links.slice(0, 5).map(({ id, href, title }) => (
                    <li key={id}>
                      <Link href={href} passHref>{title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={6} lg={2}>
              <div className="footer-seven__widget footer-seven__links">
                <h3 className="footer-seven__title">Services</h3>
                <ul className="list-unstyled footer-seven__links__list">
                  {links.slice(5).map(({ id, href, title }) => (
                    <li key={id}>
                      <Link href={href} passHref>{title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={6} lg={2}>
              <div className="footer-seven__widget footer-seven__links">
                <h3 className="footer-seven__title">Links</h3>
                <ul className="list-unstyled footer-seven__links__list">
                  {links.slice(2, 6).map(({ id, href, title }) => (
                    <li key={id}>
                      <Link href={href} passHref>{title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={12} lg={3}>
              <div className="footer-seven__widget footer-seven__social">
                {socials.map(({ id, icon, href }) => (
                  <Link href={href} key={id} className={icon} passHref></Link>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </footer>
      <div className="footer-seven__copyright">
        <div className="auto-container text-center">
          <div>
            © copyright {year} by {author}
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSeven;
