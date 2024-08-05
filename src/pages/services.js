import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import MainFooter from "@/components/MainFooter/MainFooter";
import BlogEight from "@/components/NewsSection/BlogEight";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServiceCard1 from "@/components/ServicesSection/ServiceCard1";
import ServiceCard2 from "@/components/ServicesSection/ServiceCard2";
import ServicesSectionOne from "@/components/ServicesSection/ServicesSectionOne";
import ServicesSectionThree from "@/components/ServicesSection/ServicesSectionThree";
import WhyChooseUs from "@/components/ServicesSection/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import WeWorkSection from "@/components/WeWorkSection/WeWorkSection";
import React from "react";
import bg from "@/images/zaco/SERVICES/SERVICES-banner.png";
import HeaderSix from "@/components/Header/HeaderSix";
import SliderEight from "@/components/SliderSection/SliderEight";
import image6 from "../assets/images/zaco/SERVICES/IT-SERVICES-LANDINGPAGE1.jpg";
import MobNav from "@/components/Header/MobNav";
const bannerData={
  bg:image6,
  title:"Expert IT Support to Keep Your Business Running Smoothly, Anytime, Anywhere."
  };
const services = () => {
  return (
    <Layout pageTitle="Services">
      <Style />
      {/* <Style /> */}
      {/* <MobNav /> */}
      <HeaderSix />
      <HeaderTwo />
      <MobileMenu />
      <SearchPopup />
      {/* <PageBanner title="Expert IT Support to Keep Your Business Running Smoothly, Anytime, Anywhere" /> */}

      <SliderEight bannerData={bannerData}/>



      {/* <PageBanner title="Services"  BnImage={bg}/> */}
      {/* <BlogEight /> */}
      {/* <ServicesSectionOne /> */}
      {/* <WeWorkSection /> */} 
      <ServiceCard1 />

      <WhyChooseUs className="featured-section__about-two" />
      {/* <ServiceCard2 /> */}
      {/* <ServicesSectionThree className="padd-top" /> */}
      {/* <ServicesSectionThree className="padd-top" /> */}
      {/* <GrHostMaintenance /> */}
      {/* <BsHddNetwork /> */}
      {/* <GrHostMaintenance /> */}
      {/* <TestimonialsSection /> */}
      <CallToSectionTwo className="alternate" />
      <FooterSix />
    </Layout>
  );
};

export default services;
