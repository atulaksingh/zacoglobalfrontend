
import AboutEleven from "@/components/AboutSection/AboutEleven";
import AboutTen from "@/components/AboutSection/AboutTen";
import CallToSectionFour from "@/components/CallToSection/CallToSectionFour";
import CanadaCard4 from "@/components/GlobalCounSection/Canada/CanadaCard4";
import CanadaMap from "@/components/GlobalCounSection/Canada/CanadaMap";
import ItBusiness from "@/components/GlobalCounSection/Canada/ItBusiness";
import ItSolution from "@/components/GlobalCounSection/Canada/ItSolution";
import TrustedIt from "@/components/GlobalCounSection/Canada/TrustedIt";
import WhyChooseUs from "@/components/GlobalCounSection/Canada/WhyChooseUs";
import HeaderEight from "@/components/Header/HeaderEight";
import HeaderSix from "@/components/Header/HeaderSix";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterEight from "@/components/MainFooter/FooterEight";
import MapSix from "@/components/MapSection/MapSix";
import BlogEight from "@/components/NewsSection/BlogEight";
import ProjectEight from "@/components/ProjectSection/ProjectEight";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServiceEight from "@/components/ServicesSection/ServiceEight";
import SliderEight from "@/components/SliderSection/SliderEight";
import SponsorEight from "@/components/SponsorsSection/SponsorEight";
import TestimonialsEight from "@/components/TestimonialsSection/TestimonialsEight";
import VideoSeven from "@/components/VideoSection/VideoSeven";
import weDOSection from "@/data/weDOSection";
import image1 from "../assets/images/zaco/UK/uk-home-1.jpg";
import image2 from "../assets/images/zaco/UK/uk-home-2.jpg";
import image3 from "../assets/images/zaco/UK/uk-home-3.jpg";
import image4 from "../assets/images/zaco/UK/uk-home-4.jpg";
import image5 from "../assets/images/zaco/UK/IT-SERVICES-UK-1.jpg";
import image6 from "../assets/images/zaco/UK/uk-home-6.jpg";
import contact from "../assets/images/zaco/UK/contact-uae-1.jpg";
import React from "react";
import MobNav from "@/components/Header/MobNav";
import featuredImage from "@/images/resource/featured-image-4.jpg";
import MobileMenuGlobal from "@/components/Header/MobileMenuGlobal";
const bannerData={
bg:image6,
title:"Your Trusted IT Service Provider & Solutions Company"
};

const CanadaData = {
  "title": "Your IT Business Solutions Partner - Zaco",
  "text": "As a premier IT service provider, Zaco Computers UK Limited is dedicated to delivering innovative IT business solutions tailored to meet the needs of businesses across the United Kingdom.",
  "img":image2
};
const CanadaDataITS = {
  "title": "Comprehensive IT Solutions Provider in the United Kingdom",
  "text": "At Zaco Computers UK Limited, we understand the challenges businesses face in today's digital landscape. That's why we offer a comprehensive suite of IT solutions designed to streamline operations, enhance productivity, and drive growth.",
 "img":image3
};
const CanadaDataTIT = {
  "title": "Your Trusted IT Partner – Zaco Computers UK Limited",
  "text": "From IT infrastructure management to software solutions and cybersecurity, we're here to support your business in every step of the way. Our team of experts is committed to delivering personalized service and tailored solutions that align with your unique goals and objectives.",
  "img":image4
};
const CanadaDataCard4 = {
  "title": "Managed IT Services in the United Kingdom",
  "text": "Experience peace of mind with our managed IT services. From proactive monitoring and maintenance to strategic planning and implementation, we handle all aspects of IT management so you can focus on what matters most – running your business. With our managed services, you can rest assured knowing that your IT infrastructure is in expert hands, allowing you to stay ahead of the competition and drive business success.",
  "img":image5
};
const {  UKWhyChooseData } =
  weDOSection;

  const footerData={
    "about":"As a premier IT service provider, Zaco Computers UK Limited is dedicated to delivering innovative IT business solutions tailored to meet the needs of businesses across the United Kingdom.",
    "address":"124 City Road, London,England, EC1V 2NX.",
    "number":" +44 203 815 8028",
    "email":"info@zacocomputer.com"
  }
function UK() {
  return (
    <>
      <Layout pageTitle="UK" >
        {/* <Style
          font="DM Sans, sans-serif"
          bFont="DM Sans, sans-serif"
          black="#182e65"
          text="#7c8498"
          base="#ffc001"
          baseRgb="255, 192, 1"
          scrollToTopColor="var(--thm-black)"
          blackRgb="24, 46, 101"
        /> */}
         {/* <MobNav /> */}
        <div className="globalCou">
        <HeaderSix />

        </div>
        <HeaderEight number={"+44 203 815 8028"} homecurrent={"/UK"}/>
        <MobileMenuGlobal number={"+44 203 815 8028"} />
        {/* <MobileMenu /> */}
        <SearchPopup />
        <SliderEight bannerData={bannerData}/>
        
        <ItBusiness canadaData={CanadaData}  />
        <ItSolution CanadaDataITS={CanadaDataITS}/>
        <TrustedIt CanadaDataTIT={CanadaDataTIT}/>
        {/* <CanadaCard4 CanadaDataCard4={CanadaDataCard4}/> */}
        <ItSolution CanadaDataITS={CanadaDataCard4}/>
        <WhyChooseUs title={"Why Choose Zaco Computers UK Limited?"} CanadaWhyChooseData={UKWhyChooseData} img={image1}/>
        <CanadaMap contact={contact}/>
        
        <FooterEight footerData={footerData}/>
      </Layout>
    </>
  );
}

export default UK;
