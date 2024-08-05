import AboutMeOne from "@/components/AboutSection/AboutMeOne";
import AboutSection from "@/components/AboutSection/AboutSection";
import AboutTen from "@/components/AboutSection/AboutTen";
import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import FeatureEight from "@/components/FeaturesSection/FeatureEight";
import HeaderSix from "@/components/Header/HeaderSix";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import Card1 from "@/components/server_maintenance/Card1";
import Card2 from "@/components/server_maintenance/Card2";
import IHSS from "@/components/service_Card/IHSS";
import React from "react";
import SliderEight from "@/components/SliderSection/SliderEight";
import image6 from "../assets/images/zaco/SERVER-MAINTENANCE-SERVICES/11.jpg";
import WhyUs from "@/components/WhyUs/WhyUs";
import MobNav from "@/components/Header/MobNav";
const bannerData={
  bg:image6,
  title:"Your Trusted Partner for Server Maintenance Services."
  };
function serverMaintenance() {
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
        {/* <PageBanner title="Your Trusted Partner for Server Maintenance Services." /> */}
        <SliderEight bannerData={bannerData}/>
        <AboutSection />
        <Card1 />
        <AboutTen />
        {/* <WhyUs /> */}
        <Card2 />
        <CallToSectionTwo className="alternate" />
        <FooterSix />
      </Layout>
    </>
  );
}

export default serverMaintenance;
