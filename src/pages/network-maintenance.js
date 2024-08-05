import AboutSection from "@/components/AboutSection/AboutSection";
import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import HeaderSix from "@/components/Header/HeaderSix";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import Introduction from "@/components/network_maintenance/Introduction";
import ServiceCard from "@/components/network_maintenance/ServiceCard";
import Support from "@/components/network_maintenance/Support";
import React from "react";
import image6 from "../assets/images/zaco/NETWORK-SUPPORT-AND-MAINTENANCE/IT-NETWORT-MAINTANCE.jpg";
import SliderEight from "@/components/SliderSection/SliderEight";
import MobNav from "@/components/Header/MobNav";
const bannerData={
  bg:image6,
  title:"Seamless Connectivity and Maximum Uptime for Your Global IT Network!"
  };
function networkMaintenance() {
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
        {/* <PageBanner title="Seamless Connectivity and Maximum Uptime for Your Global IT Network!" /> */}
        
      <SliderEight bannerData={bannerData}/>
        <Introduction />
        <ServiceCard />
        <Support />
        <CallToSectionTwo className="alternate" />
        <FooterSix />
      </Layout>
    </>
  );
}

export default networkMaintenance;
