import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { year, author, socials, address2, phone2, email, about3, logo8 } =
  mainFooter;

const FooterEight = ({footerData}) => {
  return (
    <>
      <footer className="footer-eight">
        <div className="auto-container">
          <Row>
            <Col md={6} lg={3}>
              <div className="footer-eight__widget">
                <h3 className="footer-eight__title">About</h3>
                <div>
                  <TextSplit text={footerData?.about} />
                </div>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="footer-eight__widget">
                <h3 className="footer-eight__title">Address</h3>
                <div>
                  <TextSplit text={footerData?.address} />
                </div>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="footer-eight__widget">
                <h3 className="footer-eight__title">Contact</h3>
                <div>
                  <Link href={`mailto:${email}`} passHref>{footerData?.email}</Link>
                  <br />
                  <Link href={`tel:${phone2.split(" ").join("")}`} passHref>{footerData?.number}</Link>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="footer-eight__widget">
                <h3 className="footer-eight__title">Follow</h3>
                <div className="footer-eight__social">
                  {socials.map(({ id, icon, href }) => (
                    <Link key={id} href={href} className={icon} passHref></Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
      {/* <div className="footer-eight__copyright">
        <div className="auto-container">
          <Link href="/index-main" passHref>
            <div>
              <Image src={logo8.src} width={101} alt="" />
            </div>
          </Link>
          <div>
            © Copyright {year} by {author}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default FooterEight;
