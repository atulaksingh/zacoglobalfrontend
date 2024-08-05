import AboutSectionThree from "@/components/AboutSection/AboutSectionThree";
import AboutSeven from "@/components/AboutSection/AboutSeven";
import AboutSix from "@/components/AboutSection/AboutSix";
import IndexReliableIT from "@/components/AboutSection/IndexReliableIT";
import CallToSection from "@/components/CallToSection/CallToSection";
import CallToSectionThree from "@/components/CallToSection/CallToSectionThree";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";
import FunFactSix from "@/components/FunFacts/FunFactSix";
import FunFactsOne from "@/components/FunFacts/FunFactsOne";
import GetQuoteTwo from "@/components/GetQuote/GetQuoteTwo";
import HeaderSix from "@/components/Header/HeaderSix";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import MobNav from "@/components/Header/MobNav";
import Layout from "@/components/Layout/Layout";
import LiveSection from "@/components/LiveSection/LiveSection";
import FooterSix from "@/components/MainFooter/FooterSix";
import MapSix from "@/components/MapSection/MapSix";
import BlogEight from "@/components/NewsSection/BlogEight";
import BlogSix from "@/components/NewsSection/BlogSix";
import ProjectEight from "@/components/ProjectSection/ProjectEight";
import ProjectSix from "@/components/ProjectSection/ProjectSix";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServiceSix from "@/components/ServicesSection/ServiceSix";
import SliderSix from "@/components/SliderSection/SliderSix";
import BrandSupport from "@/components/SponsorsSection/BrandSupport";
import SponsorSix from "@/components/SponsorsSection/SponsorSix";
import SubscribeOne from "@/components/SubscribeSection/SubscribeOne";
import TeamSection from "@/components/TeamSection/TeamSection";
import TestimonialsSix from "@/components/TestimonialsSection/TestimonialsSix";
import TrustedSection from "@/components/TrustedSection/TrustedSection";
import Dj from "@/components/VideoSection/Dj";
import Dj2 from "@/components/VideoSection/Dj2";
import VideoSix from "@/components/VideoSection/VideoSix";
import WeDOSection from "@/components/WeDOSection/WeDOSection";
import preloader from "@/images/update-01-10-2021/preloader-6.png";
import React from "react";

const Home6 = () => {
  return (
    <Layout pageTitle="/" preloader={preloader}>
      {/* <Style
        font="Kumbh Sans, sans-serif"
        bFont="Kumbh Sans, sans-serif"
        black="#1a3546"
        text="#6b7881"
        base="#41b974"
        baseRgb="65, 185, 116"
        scrollToTopColor="#fff"
      /> */}
      {/* <div>
        <MobNav />
      </div> */}
      <HeaderSix />
      <HeaderTwo />
      <MobileMenu />
      <SearchPopup />
      <SliderSix />

      {/* <div className="" >

      <Dj />
</div> */}
      {/* <DiscoverSection /> */}
      <BlogEight />
      <AboutSeven />
      <AboutSix />
      <FunFactsOne />
      <TrustedSection />
      <div className="">
        {/* <LiveSection /> */}
        {/* <AboutSectionThree /> */}
        <IndexReliableIT />
      </div>
      <ProjectEight />
      {/* <ServiceSix /> */}
      {/* <SubscribeOne /> */}
      {/* <ProjectSix /> */}
      {/* <FunFactSix /> */}

      <SponsorSix />
      <BrandSupport />
      <div className="">
        {/* <TestimonialsSix /> */}
        <TeamSection />

        {/* <Dj2 /> */}
      </div>

      <WeDOSection />
      {/* <BlogSix /> */}
      {/* <CallToSectionThree /> */}
      {/* <Dj2 /> */}
      <div className="my-3">{/* <VideoSix /> */}</div>
      <CallToSection />

      <GetQuoteTwo className="get-quote-two__one-page" />

      {/* <MapSix /> */}
      <FooterSix />
    </Layout>
  );
};

export default Home6;
