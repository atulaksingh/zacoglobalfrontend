import PageBanner from '@/components/BannerSection/PageBanner'
import CallToSectionTwo from '@/components/CallToSection/CallToSectionTwo'
import HeaderSix from '@/components/Header/HeaderSix'
import HeaderTwo from '@/components/Header/HeaderTwo'
import MobileMenu from '@/components/Header/MobileMenu'
import Layout from '@/components/Layout/Layout'
import FooterSix from '@/components/MainFooter/FooterSix'
import Style from '@/components/Reuseable/Style'
import SearchPopup from '@/components/SearchPopup/SearchPopup'
import RantalIntro from '@/components/rental_services/RantalIntro'
import RantleBenefit from '@/components/rental_services/RantleBenefit'
import RantleBenefit2 from '@/components/rental_services/RantleBenefit2'
import RantleWhy from '@/components/rental_services/RantleWhy'
import StorageIntroduction from '@/components/storage_maintanance/StorageIntroduction'
import StorageService from '@/components/storage_maintanance/StorageService'
import StorageWhyZaco from '@/components/storage_maintanance/StorageWhyZaco'
import React from 'react'
import image6 from "../assets/images/zaco/SERVER-RENTAL-SERVICES/server-rental-services-2.jpg";
import SliderEight from '@/components/SliderSection/SliderEight'
import MobNav from '@/components/Header/MobNav'
const bannerData={
  bg:image6,
  title:"Reliable, Scalable Server Rental Services Tailored to your Global Business Needs."
  };
function rentalServices() {
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
        {/* <PageBanner title="Reliable, Scalable Server Rental Services Tailored to your Global Business Needs." /> */}
        <SliderEight bannerData={bannerData}/>
        <RantalIntro />
        <RantleBenefit />
        {/* <RantleBenefit2 /> */}

        <RantleWhy />
        
        <CallToSectionTwo className="alternate" />
        <FooterSix />
      </Layout>
   </>
  )
}

export default rentalServices