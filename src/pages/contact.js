import PageBanner from "@/components/BannerSection/PageBanner";
import ContactSection from "@/components/ContactSection/ContactSection";
import HeaderOne from "@/components/Header/HeaderOne";
import HeaderSix from "@/components/Header/HeaderSix";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import MobNav from "@/components/Header/MobNav";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
         <Style />
      {/* <MobNav /> */}
      <HeaderSix />
      <HeaderTwo/>
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Contact" />
      <ContactSection map form />
      <FooterSix />
    </Layout>
  );
};

export default Contact;
