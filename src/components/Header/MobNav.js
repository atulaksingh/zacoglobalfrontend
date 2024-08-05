import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import Link from "next/link";

// Mapping of country codes to country names
const countryNames = {
  IN: "India",
  GB: "United Kingdom",
  UAE: "UAE",
  CA: "Canada",
};

function MobNav() {
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
    <div className="bigMovMenu auto-container py-2 bg-gray-100">
      <div className="flex justify-between items-center">
        <div>
          <Link href={"/eosl"} passHref>
            <div className="header-six__info__link">EOSL Library</div>
          </Link>
        </div>
        <div>
          <Link href={`/blog`} passHref>
            <div className="header-six__info__link">Blog</div>
          </Link>
        </div>
        <div className="flex items-center">
          <ReactFlagsSelect
            selected={selectedCountry}
            onSelect={handleCountrySelect}
            countries={["IN", "GB", "UAE", "AE", "CA"]}
            placeholder={countryNames[selectedCountry] || "Select a country"}
          />
        </div>
      </div>
    </div>
  );
}

export default MobNav;
