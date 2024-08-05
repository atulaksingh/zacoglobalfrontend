"use client";
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
import BlogPageData from "@/components/SidebarPageContainerTwo/BlogPageData";
import SidebarPageContainerTwo from "@/components/SidebarPageContainerTwo/SidebarPageContainerTwo";
import axios from "axios";
import React from "react";

const BlogSingle = ({ blogPost, catData, postId }) => {
  // console.log("ajjjjjjjjjjjjqqqqq",blogPost, catData, postId)
  return (
    <Layout pageTitle="Blog Details">
      <Style />
      <HeaderSix />
      <HeaderTwo />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Blog Details" page="Blog Details" />
      <BlogPageData postId={postId} blogPost={blogPost} catData={catData} />
      <FooterSix />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { postId } = context.params;
// console.log("sgfghsdf",postId)
  let blogPost = [];
  let catData = [];

  try {
    const blogPostResponse = await axios.get(`http://django:8000/api/blogposts/${postId}/`);
    blogPost = blogPostResponse.data;
  } catch (error) {
    console.error("Error fetching blog post data:", error);
  }

  try {
    const catDataResponse = await axios.get("http://django:8000/api/categories/");
    catData = catDataResponse.data;
  } catch (error) {
    console.error("Error fetching category data:", error);
  }

  return {
    props: {
      blogPost,
      catData,
      postId,
    },
  };
}

export default BlogSingle;
