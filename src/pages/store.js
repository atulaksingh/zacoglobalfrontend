import PageBanner from "@/components/BannerSection/PageBanner";
import GallerySectionOne from "@/components/GallerySection/GallerySectionOne";
import GetQuoteTwo from "@/components/GetQuote/GetQuoteTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import HeaderSix from "@/components/Header/HeaderSix";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ZacoStoreCard1 from "@/components/ZacoStore/ZacoStoreCard1";
import teamSection from "@/data/teamSection";
import React from "react";
// Define different data for each instance of ZacoStoreCard1
const cardData = {
  title: 'Card Title',
  id: ".my-slider1",
  brands: [
    {
      id: 1,
      image: "001.png",
      name: "Server Hard Disk",
      designation: "Designer",
    },
    {
      id: 2,
      image: "002.png",
      name: "Tower Server",
      designation: "Designer",
    },
    {
      id: 3,
      image: "003.png",
      name: "Catalyst Switch",
      designation: "Designer",
    },
    {
      id: 4,
      image: "004.png",
      name: "Sun Fire V90 Server",
      designation: "Designer",
    },
    {
      id: 5,
      image: "005.png",
      name: "Routers",
      designation: "Designer",
    },
    {
      id: 6,
      image: "006.png",
      name: "Server Mother Board",
      designation: "Designer",
    },
    {
      id: 7,
      image: "007.png",
      name: "Dell PowerEdge R750 Server",
      designation: "Designer",
    },
    {
      id: 8,
      image: "008.png",
      name: "IBM Blade Center H Chassis",
      designation: "Designer",
    },
    {
      id: 9,
      image: "009.png",
      name: "HPE Cloudline CL2800",
      designation: "Designer",
    },
    {
      id: 10,
      image: "010.png",
      name: "HP BladeSystem",
      designation: "Designer",
    },
    // {
    //   id: 11,
    //   image: "team-1.jpg",
    //   name: "Kevin martin",
    //   designation: "Designer",
    //   socials,
    // },
    // {
    //   id: 12,
    //   image: "team-2.jpg",
    //   name: "Jessica Brown",
    //   designation: "Designer",
    //   socials,
    // },
    // {
    //   id: 13,
    //   image: "team-3.jpg",
    //   name: "John Albert",
    //   designation: "Designer",
    //   socials,
    // },
    // {
    //   id: 14,
    //   image: "team-4.jpg",
    //   name: "Rose ford",
    //   designation: "Designer",
    //   socials,
    // },
    // {
    //   id: 15,
    //   image: "team-5.jpg",
    //   name: "Mike Hardson",
    //   designation: "Designer",
    //   socials,
    // },
  ],
};
const cardData2 = {
  title: 'Card Title',
  id: ".my-slider2",
  brands: [
    {
      id: 1,
      image: "001.png",
      name: "Server Hard Disk",
      designation: "Designer",
    },
    {
      id: 2,
      image: "002.png",
      name: "Tower Server",
      designation: "Designer",
    },
    {
      id: 3,
      image: "003.png",
      name: "Catalyst Switch",
      designation: "Designer",
    },
    {
      id: 4,
      image: "004.png",
      name: "Sun Fire V90 Server",
      designation: "Designer",
    },
    {
      id: 5,
      image: "005.png",
      name: "Routers",
      designation: "Designer",
    },
    {
      id: 6,
      image: "006.png",
      name: "Server Mother Board",
      designation: "Designer",
    },
    {
      id: 7,
      image: "007.png",
      name: "Dell PowerEdge R750 Server",
      designation: "Designer",
    },
    {
      id: 8,
      image: "008.png",
      name: "IBM Blade Center H Chassis",
      designation: "Designer",
    },
    {
      id: 9,
      image: "009.png",
      name: "HPE Cloudline CL2800",
      designation: "Designer",
    },
    {
      id: 10,
      image: "010.png",
      name: "HP BladeSystem",
      designation: "Designer",
    },
    // {
    //   id: 11,
    //   image: "team-1.jpg",
    //   name: "Kevin martin",
    //   designation: "Designer",
    //   socials,
    // },
    // {
    //   id: 12,
    //   image: "team-2.jpg",
    //   name: "Jessica Brown",
    //   designation: "Designer",
    //   socials,
    // },
    // {
    //   id: 13,
    //   image: "team-3.jpg",
    //   name: "John Albert",
    //   designation: "Designer",
    //   socials,
    // },
    // {
    //   id: 14,
    //   image: "team-4.jpg",
    //   name: "Rose ford",
    //   designation: "Designer",
    //   socials,
    // },
    // {
    //   id: 15,
    //   image: "team-5.jpg",
    //   name: "Mike Hardson",
    //   designation: "Designer",
    //   socials,
    // },
  ],
};
const Portfolio = () => {
  return (
    <Layout pageTitle="zacostore">
      <Style />
      <HeaderTwo />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Zaco Online Store" />
      {/* <GallerySectionOne portfolio /> */}
      {/* <ZacoStoreCard1 tittle={teamSection.brand} brands={teamSection.brands} />
      <ZacoStoreCard1 tittle={teamSection.categ} brands={teamSection.category} /> */}
      <div style={{ marginBottom: '20px' }}>
        <ZacoStoreCard1 {...cardData2} />
        {/* <ZacoStoreCard1 {...cardData}/> */}
      </div>

      <GetQuoteTwo />
      <FooterSix />
    </Layout>
  );
};

export default Portfolio;
