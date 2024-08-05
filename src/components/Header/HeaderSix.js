// import { useRootContext } from "@/context/context";
import { useRootContext } from "@/context/context";
import headerData from "@/data/header";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useRouter } from "next/router";
import ReactFlagsSelect from "react-flags-select";
const { title, phone, socials, logo6, email, eosl, blog, abb, gc ,lMobile} = headerData;
const countryNames = {
  IN: "India",
  GB: "United Kingdom",
  UAE: "UAE",
  CA: "Canada",
};
const HeaderSix = () => {
  const { toggleMenu } = useRootContext();
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
    localStorage.setItem("selectedCountry", countryCode);
    // Perform redirection based on selected country
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
        // Redirect to a default page if no specific redirection defined
        router.push("/about");
        break;
    }
  };
  return (

    <header className="header-six">
      <div className="auto-container">
        <div className="header-six__logo">
          <Link className="" href="/" passHref>
              <Image src={logo6.src} width={134} alt={title} className=" hidden lg:visible" />
              <Image src={lMobile.src} width={134} alt={title} className="bigNewImage  py-1.5" />
          </Link>

          <div onClick={toggleMenu} className="mobile-nav-toggler">
            <span className="icon flaticon-menu-2"></span>
            <span className="txt">Menu</span>
          </div>
        </div>

   

        <div className="header-six__info lg:mr-[-100px]">
        <Link href={"/eosl"} className="header-six__info__link" passHref>
              {/* <i className="flaticon-call"></i> */}
              {eosl}
            </Link>
          <Link href={`/blog`} className="header-six__info__link" passHref>
              {/* <i className="flaticon-email-2"></i> */}
              {blog}
            </Link>

          <div className=" mr-[100px] ">
              <ReactFlagsSelect
                fullWidth={false}
                selected={selectedCountry}
                onSelect={handleCountrySelect}
                countries={["IN", "GB", "UAE", "AE", "CA"]}
                placeholder={countryNames[selectedCountry] || "Select a country"}
              />
            </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSix;
