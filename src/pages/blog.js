"use client"
import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import HeaderSix from "@/components/Header/HeaderSix";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SidebarPageContainerTwo from "@/components/SidebarPageContainerTwo/SidebarPageContainerTwo";
import axios from "axios";
import React from "react";

function blog({allBlogs,allCategory}) {
  // console.log("data5656",allBlogs,allCategory)
  return (
    <>
      <Layout pageTitle="Blog Sidebar">
        <Style />
        <HeaderSix />
        <HeaderTwo />
        <MobileMenu />
        <SearchPopup />
        <PageBanner title="Blog Posts" />
        <SidebarPageContainerTwo blogPost={allBlogs} catData={allCategory}/>
        <FooterSix />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    // Make simultaneous GET requests using Promise.all
    const [response1, response2] = await Promise.all([
      axios.get("http://django:8000/api/blogposts/"),
      axios.get("http://django:8000/api/categories/"), // Replace with your actual endpoint
    ]);

    // Extract the data from each response
    const allBlogs = response1.data;
    const allCategory = response2.data;

    // Return the data as props
    return {
      props: {
        allBlogs,
        allCategory,
      },
    };
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);

    // You can also return an empty object or handle the error in other ways
    return {
      props: {},
    };
  }
}



export default blog;
