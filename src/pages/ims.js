import AboutMeOne from "@/components/AboutSection/AboutMeOne";
import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import HeaderSix from "@/components/Header/HeaderSix";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import ImsBenefits from "@/components/IT_IMS/ImsBenefits";
import ImsWhyChosse from "@/components/IT_IMS/ImsWhyChosse";
import ImsWhyOpt from "@/components/IT_IMS/ImsWhyOpt";
import ImsWhyOpt1 from "@/components/IT_IMS/ImsWhyOpt1";
import IntroductionIMS from "@/components/IT_IMS/IntroductionIMS";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import IHSS from "@/components/service_Card/IHSS";
import SliderEight from "@/components/SliderSection/SliderEight";
import React from "react";
import image6 from "../assets/images/zaco/IT-infrastucture.jpg";
const bannerData={
  bg:image6,
  title:"Optimize and Secure Your IT Infrastructure with Our Expert Managed Services!"
  };
function ims() {
  return (
    <>
      <Layout pageTitle="Services">
        <Style />

        <Style />
        <HeaderSix />
        <HeaderTwo />
        <MobileMenu />
        <SearchPopup />
        {/* <PageBanner title="Optimize and Secure Your IT Infrastructure with Our Expert Managed Services!" /> */}
        <SliderEight bannerData={bannerData}/>

        <IntroductionIMS />
        <ImsBenefits />
        <ImsWhyChosse />
        <ImsWhyOpt />
        <ImsWhyOpt1 />

        <CallToSectionTwo className="alternate" />
        <FooterSix />
      </Layout>
    </>
  );
}

export default ims;
