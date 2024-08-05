


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
import image1 from "../assets/images/zaco/UAE/UAE-Home-1.jpg";
import image2 from "../assets/images/zaco/UAE/UAE-Home-2.jpg";
import image3 from "../assets/images/zaco/UAE/UAE-Home-3.jpg";
import image4 from "../assets/images/zaco/UAE/UAE-Home-4.jpg";
import image5 from "../assets/images/zaco/UAE/two-1.jpg";
import image6 from "../assets/images/zaco/UAE/women.jpg";
import contact from "../assets/images/zaco/UAE/contact-uae-1.jpg";
import React from "react";
import MobNav from "@/components/Header/MobNav";
import MobileMenuGlobal from "@/components/Header/MobileMenuGlobal";
const bannerData={
  bg:image1,
  title:"Premier IT Solutions Provider in the Emirates"
  };
const CanadaData = {
  "title": "Your IT Business Solutions Partner - Zaco",
  "text": "At Zaco IT Solutions FZE in the UAE, we're more than just an IT service provider – we're your trusted partner in navigating the ever-evolving world of technology. As a leading IT solutions company, we are committed to delivering innovative and tailored IT solutions to businesses across the United Arab Emirates.",
  "img":image2
};
const CanadaDataITS = {
  "title": "Comprehensive IT Solutions Provider in the United Arab Emirates",
  "text": "With a focus on excellence and customer satisfaction, we offer a wide range of IT services tailored to meet the unique needs of businesses in the UAE. From IT infrastructure management to software solutions and cybersecurity, we have the expertise and resources to help your business thrive in this digital age.",
  "img":image3
};
const CanadaDataTIT = {
  "title": "Your Trusted IT Solutions Company in UAE",
  "text": "At Zaco IT Solutions FZE, we understand the importance of building strong relationships with our clients. That's why we strive to be more than just a vendor – we aim to be a trusted partner, offering personalized service and IT support to help your business succeed.",
  "img":image4
};
const CanadaDataCard4 = {
  "title": "Managed IT Services UAE: Empowering Your Business",
  "text": "Experience peace of mind with our managed IT services in the UAE. Our team of experienced professionals will proactively monitor, maintain, and optimize your IT infrastructure, allowing you to focus on what matters most – growing your business. From 24/7 support to strategic planning and implementation, we're here to ensure your IT systems are always running smoothly and efficiently.",
  "img":image5
};
const {  UKWhyChooseData ,   } =
  weDOSection;
  const footerData={
    "about":"At Zaco IT Solutions FZE in the UAE, we're more than just an IT service provider – we're your trusted partner in navigating the ever-evolving world of technology. ",
    "address":"B.C 1303474,First Floor, AFZ-B1,Ajman, UAE.",
    "number":"+971 56 625 4023",
    "email":"info@zacocomputer.com"
  }
function UAE() {
  return (
    <>
      <Layout pageTitle="UAE" >
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
        <HeaderEight number={"+971 56 625 4023"} homecurrent={"/UAE"}/>
        
        {/* <MobileMenu /> */}
        <MobileMenuGlobal  number={"+971 56 625 4023"}/>
        <SearchPopup />
        <SliderEight bannerData={bannerData}/>
        <ItBusiness canadaData={CanadaData}  />
        <ItSolution CanadaDataITS={CanadaDataITS}/>
        <TrustedIt CanadaDataTIT={CanadaDataTIT}/>
        <CanadaCard4 CanadaDataCard4={CanadaDataCard4}/>
        <WhyChooseUs title={"Why Choose Zaco IT Solutions FZE?"} CanadaWhyChooseData={UKWhyChooseData} img={image6}/>
        <CanadaMap contact={contact}/>
        
        <FooterEight footerData={footerData}/>
      </Layout>
    </>
  );
}

export default UAE;
