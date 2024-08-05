"use client"
import React from "react";
import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SidebarPageContainerTwo from "@/components/SidebarPageContainerTwo/SidebarPageContainerTwo";
import { useEffect, useState } from "react";
import axios from "axios";
const BlogSingle = () => {

  const [post, setPost] = useState(null);
  // useEffect(() => {
  //   if (id) {
  //     const fetchPost = async () => {
  //       try {
  //         const response = await axios.get(
  //           `http://127.0.0.1:8000/api/blogposts/${id}/`
  //         );
  //         setPost(response.data);
  //       } catch (error) {
  //         console.error("Error fetching the blog post:", error);
  //       }
  //     };

  //     fetchPost();
  //   }
  // }, [id]);

  // if (!post) {
  //   return <div>Loading...</div>;
  // }
  return (
    <Layout pageTitle="Blog Single">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Blog Posts" page="Blog Single" />
      <SidebarPageContainerTwo isDetails postId={id} />
      <MainFooter />
    </Layout>
  );
};

export default BlogSingle;
