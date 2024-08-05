import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const {
  about,
  year,
  author,
  logo3,
  socials,
  links,
  address,
  phone,
  email,
  newses,
} = mainFooter;

const MainFooterTwo = () => {
  return (
    <footer className="main-footer__three">
      <div className="auto-container">
        <Row>
          <Col md={6} lg={3}>
            <div className="footer-widget">
              <h3>About</h3>
              <div>{about}</div>
              <Link href="/contact" passHref>
                <div className="theme-btn btn-style-three">Get Started</div>
              </Link>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="footer-widget">
              <h3>Explore</h3>
              <ul className="list-unstyled footer-widget__links">
                {links.map(({ id, href, title }) => (
                  <li key={id}>
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="footer-widget">
              <h3>News</h3>
              <ul className="post-list">
                {newses.map(({ id, title, image, date }) => (
                  <li key={id}>
                    <Image
                      src={
                        require(`@/images/update-1-12-2020/resources/${image}`)
                          .default.src
                      }
                      width={68}
                      height={70}
                      alt=""
                    />
                    <div className="content">
                      <div>{date}</div>
                      <h4>
                        <Link href="/blog-single">{title}</Link>
                      </h4>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="footer-widget">
              <h3>Contact</h3>
              <ul className="list-unstyled contact-list">
                <li>
                  <span className="icon flaticon-call"></span>
                  <Link href={`tel:${phone.split(" ").join("")}`}>{phone}</Link>
                </li>
                <li>
                  <span className="icon flaticon-email-2"></span>
                  <Link href={`mailto:${email}`}>{email}</Link>
                </li>
                <li className="address">
                  <span className="icon flaticon-pin-1"></span> 66 Broklyn
                  <TextSplit text={address} />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <div className="bottom-footer">
        <div className="auto-container">
          <div className="left-content">
            <Link href="/index-main" passHref>
              <Link>
                <Image src={logo3.src} width={134} height={34} alt="" />
              </Link>
            </Link>
            <div>
              © copyright {year} by {author}
            </div>
          </div>
          <ul className="list-unstyled social-links">
            {socials.map(({ id, icon, href }) => (
              <li key={id}>
                <Link href={href} passHref>
                  <span className={icon}></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default MainFooterTwo;
