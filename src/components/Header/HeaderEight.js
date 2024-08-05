import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";

const { navItems, title, title3, logo8, socials, email, address, phone2,zacologo , logo6 } =
  headerData;

const HeaderEight = ({number,homecurrent}) => {
  const { scrollTop } = useScroll(120);
  const { toggleMenu, toggleSearch ,toggleMenu111 } = useRootContext();

  return (
    <header className="header-eight">
      {/* <div className="header-eight__topbar">
        <div className="auto-container">
          <ul className="header-eight__topbar__info">
            <li>
              <i className="flaticon-email-2"></i>
              <Link href={`mailto:${email}`} passHref>{email}</Link>
            </li>
            <li>
              <i className="flaticon-pin-1"></i>
              {address}
            </li>
          </ul>
          <div className="header-eight__topbar__right">
            <div>{title3}</div>
            <div className="header-eight__topbar__social">
            {socials.map(({ id, icon, href }) => (
  <Link key={id} href={href} className={icon} passHref></Link>
))}
            </div>
          </div>
        </div>
      </div> */}

      <nav
        className={`mainmenu-eight main-header${
          scrollTop ? " fixed-header" : ""
        }`}
      >
        <div className="auto-container">
          <div className="nav-outer mainmenu-eight__inner ">
            <div className="mainmenu-eight__left">
              <Link href={homecurrent} passHref>
                {/* <Link> */}
                  <Image src={logo6.src} width={134} alt={title} />
                {/* </Link> */}
              </Link>
              <div 
              onClick={toggleMenu111}
               className="mobile-nav-toggler">
                <span className="icon flaticon-menu-2"></span>
                <span className="txt">Menu</span>
              </div>
            </div>
            <nav className="main-menu navbar-expand-md navbar-light">
              <div
                className="collapse navbar-collapse show clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation clearfix">
                  {navItems.map((navItem) => (
                    <NavItem navItem={navItem} key={navItem.id} />
                  ))}
                </ul>
              </div>
            </nav>

            <div className="mainmenu-eight__right">
              {/* <div className="search-btn mainmenu-eight__search">
                <button
                  onClick={toggleSearch}
                  type="button"
                  className="theme-btn search-toggler"
                >
                  <span className="flaticon-magnifying-glass"></span>
                </button>
              </div> */}

              <Link
                href={`tel:${phone2.split(" ").join("")}`}
                className="mainmenu-eight__call"
                passHref
              >
                <span className="mainmenu-eight__call__icon">
                  <i className="flaticon-phone"></i>
                </span>
                <span className="mainmenu-eight__call__text">
                  Have any questions? <br />
                  Call: <strong>{number}</strong>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderEight;
