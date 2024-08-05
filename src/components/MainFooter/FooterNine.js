import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const { links, phone, email, address3, subscribeText, year, author, socials } =
  mainFooter;

const FooterNine = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <>
      <footer className="footer-nine">
        <div className="auto-container">
          <Row>
            <Col md={12} lg={4}>
              <div className="footer-nine__widget footer-nine__subscribe">
                <h3 className="footer-nine__widget__title">Newsletter</h3>
                <div className="footer-nine__subscribe__text">{subscribeText}</div>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                  <button type="submit" className="footer-nine__subscribe__btn">
                    <span className="fa fa-check"></span>
                  </button>
                </form>
              </div>
            </Col>
            <Col md={12} lg={5}>
              <div className="footer-nine__widget footer-nine__links">
                <Row>
                  <Col md={6} lg={6}>
                    <h3 className="footer-nine__widget__title">Explore</h3>
                    <ul className="list-unstyled footer-nine__links__list">
                      {links.slice(0, 5).map(({ id, href, title }) => (
                        <li key={id}>
                          <Link href={href} passHref>{title}</Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col md={6} lg={6}>
                    <h3 className="footer-nine__widget__title">legal</h3>
                    <ul className="list-unstyled footer-nine__links__list">
                      {links.slice(4).map(({ id, href, title }) => (
                        <li key={id}>
                          <Link href={href} passHref>{title}</Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={12} lg={3}>
              <div className="footer-nine__widget footer-nine__contact">
                <h3 className="footer-nine__widget__title">contact</h3>
                <div className="footer-nine__contact__text">{address3}</div>
                <ul className="footer-nine__contact__list">
                  <li>
                    <i className="fa fa-envelope"></i>
                    <Link href={`mailto:${email}`} passHref>{email}</Link>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>
                    <Link href={`tel:${phone.split(" ").join("")}`} passHref>{phone}</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
      <div className="footer-nine__bottom">
        <div className="auto-container">
          <div className="footer-nine__copyright">
            © copyright {year} by {author}
          </div>
          <div className="footer-nine__social">
            {socials.map(({ id, icon, href }) => (
              <Link key={id} href={href} className={icon} passHref></Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterNine;
