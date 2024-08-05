import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";

const { year, author, socials, address, phone, email, title, bg } = mainFooter;

const MainFooterThree = () => {
  return (
    <footer
      className="main-footer main-footer__two"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="auto-container">
        <div className="footer-widget text-center">
          <h3>{title}</h3>
          <div>
            <Link href={`tel:${phone.split(" ").join("-")}`}>{phone}</Link>
            <Link href={`mailto:${email}`}>{email}</Link>
            <span>{address.split("\n")[0]}</span>
          </div>
          <ul className="social-links clearfix">
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
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner clearfix">
            <div className="copyright">
              &copy; copyright {year} by {author}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooterThree;
