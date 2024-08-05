// MobileMenu.js
import React from "react";
import { Image } from "react-bootstrap";
import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import NavItem from "@/components/Header/NavItem";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import Link from "next/link";

// Mapping of country codes to country names
const countryNames = {
  IN: "India",
  GB: "United Kingdom",
  UAE: "UAE",
  CA: "Canada",
};

const { icon, text, email, phone, socials, navItems1, navItemsTwo, lMobile } =
  headerData;

const MobileMenu = ({ onePage = false }) => {
  const { menuStatus, toggleMenu, menuStatus111, toggleMenu111 } =
    useRootContext();

  const newNavItems = onePage ? navItemsTwo : navItems1;
  const [selectedCountry, setSelectedCountry] = useState("IN"); // Default value
  const router = useRouter();

  useEffect(() => {
    // Retrieve the selected country from local storage on component mount
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, []);

  const handleCountrySelect = (countryCode) => {
    setSelectedCountry(countryCode);
    localStorage.setItem("selectedCountry", countryCode); // Save selected country to local storage
    switch (countryCode) {
      case "IN":
        router.push("/");
        break;
      case "GB":
        router.push("/UK");
        break;
      case "UAE":
      case "AE":
        router.push("/UAE");
        break;
      case "CA":
        router.push("/canada");
        break;
      default:
        router.push("/about");
        break;
    }
  };

  return (
    <>
      <div className={`side-menu__block${menuStatus ? " active" : ""}`}>
        <div
          onClick={toggleMenu}
          className="side-menu__block-overlay custom-cursor__overlay"
        >
          <div className="cursor"></div>
          <div className="cursor-follower"></div>
        </div>
        <div className="side-menu__block-inner">
          <div className="side-menu__top justify-content-end">
            <a
              onClick={toggleMenu}
              className="side-menu__toggler side-menu__close-btn"
            >
              <Image src={icon.src} alt="" />
            </a>
          </div>

          <nav className="mobile-nav__container">
            <div
              // className="collapse navbar-collapse show clearfix"
              className=" navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                {newNavItems.map((navItem) => (
                  <NavItem navItem={navItem} key={navItem.id} mobile />
                ))}
              </ul>
            </div>
            <div>
              <div className=" mt-3">
                <ReactFlagsSelect
                  selected={selectedCountry}
                  onSelect={handleCountrySelect}
                  countries={["IN", "GB", "UAE", "AE", "CA"]}
                  placeholder={
                    countryNames[selectedCountry] || "Select a country"
                  }
                />
              </div>
            </div>
          </nav>
          <div className="side-menu__sep"></div>
          <div className="side-menu__content">
            <p>
              Established in 2000, we provide the best IT hardware, server hard
              drives, server motherboards, IT server maintenance, new and
              refurbished servers along with IT Solutions for the corporate
              world.
            </p>
            <p>
              <a href={`mailto:${email}`}>{email}</a> <br />{" "}
              <a href={`tel:${phone.split(" ").join("")}`}>{phone}</a>
            </p>
            <div className="side-menu__social">
              {socials.map(({ id, icon, href }) => (
                <a key={id} href={href}>
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
