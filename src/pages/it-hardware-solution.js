import AboutMeOne from "@/components/AboutSection/AboutMeOne";
import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import HeaderSix from "@/components/Header/HeaderSix";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServiceCard1 from "@/components/ServicesSection/ServiceCard1";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import WeDOSection from "@/components/WeDOSection/WeDOSection";
import WeWorkSection from "@/components/WeWorkSection/WeWorkSection";
import IHSS from "@/components/service_Card/IHSS";
import React from "react";
import image6 from "../assets/images/zaco/IT-hardware-solutions-1.jpg";
import SliderEight from "@/components/SliderSection/SliderEight";
import MobNav from "@/components/Header/MobNav";
const bannerData={
  bg:image6,
  title:"Empowering Businesses Worldwide with Reliable IT Hardware and Expert Support."
  };
function ithardwaresolution() {
  return (
    <>
      <Layout pageTitle="Services">
        <Style />

        <Style />
        {/* <MobNav /> */}
        <HeaderSix />
        <HeaderTwo />
        <MobileMenu />
        <SearchPopup />
        {/* <PageBanner title="Empowering Businesses Worldwide with Reliable IT Hardware and Expert Support." /> */}
        <SliderEight bannerData={bannerData}/>
        <IHSS />
        <AboutMeOne />

        <CallToSectionTwo className="alternate" />
        <FooterSix />
      </Layout>
    </>
  );
}

export default ithardwaresolution;
