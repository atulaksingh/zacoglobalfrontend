import NewBanner from '@/components/BannerSection/NewBanner'
import PageBanner from '@/components/BannerSection/PageBanner'
import CallToSectionTwo from '@/components/CallToSection/CallToSectionTwo'
import ContactSectionTwo from '@/components/ContactSection/ContactSectionTwo'
import FaqsSection from '@/components/FaqsSection/FaqsSection'
import FeatureEight from '@/components/FeaturesSection/FeatureEight'
import HeaderSix from '@/components/Header/HeaderSix'
import HeaderTwo from '@/components/Header/HeaderTwo'
import MobileMenu from '@/components/Header/MobileMenu'
import HistoryTimeline from '@/components/HistorySection/HistoryTimeline'
import Layout from '@/components/Layout/Layout'
import FooterSix from '@/components/MainFooter/FooterSix'
import Style from '@/components/Reuseable/Style'
import SearchPopup from '@/components/SearchPopup/SearchPopup'
import React from 'react'
import image6 from "../assets/images/zaco/IT-ASSET-DISPOSITON.jpg";
import SliderEight from '@/components/SliderSection/SliderEight'
import MobNav from '@/components/Header/MobNav'
const bannerData={
  bg:image6,
  title:"Safely and Sustainably Dispose of  Your IT Assets with Zaco's Expert ITAD Services"
  };
function itequipmentbuyback() {
    return (
        <>

            <Layout pageTitle="Services">
                <Style />
                {/* <MobNav /> */}
                <HeaderSix />
                <HeaderTwo />
                <MobileMenu />
                <SearchPopup />
                {/* <NewBanner title="Safely and Sustainably Dispose of Your IT Assets with Zaco's Expert ITAD Services" title2="We offer best price for disposing your IT hardware" /> */}
                <SliderEight bannerData={bannerData}/>
                <ContactSectionTwo />
                {/* <FeatureEight /> */}
                <FaqsSection />
                <HistoryTimeline />
                <CallToSectionTwo className="alternate" />
                <FooterSix />
            </Layout>
        </>
    )
}

export default itequipmentbuyback