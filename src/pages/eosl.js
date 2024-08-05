"use client"
import PageBanner from "@/components/BannerSection/PageBanner";
import EoslCard from "@/components/EOSL/EoslCard";
import HeaderSix from "@/components/Header/HeaderSix";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import MapBox from "@/components/MapSection/MapBox";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function eosl({jobs}) {
  // console.log("data5656",jobs)
  // alert("hello gg")
  return (
    <>
      <Layout pageTitle="Contact">
        {/* <Style /> */}
        <HeaderSix />
        <HeaderTwo />
        <MobileMenu />
        <SearchPopup />
        <PageBanner title="Eosl Library" />
        <EoslCard  data={jobs}/>

        <FooterSix />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    // console.log("data3786478326")

    // Make a GET request using Axios
    const response = await axios.get("http://django:8000/view-eosl");
    // const response = await axios.get("http://127.0.0.1:8000/view-eosl");

    // Extract the data from the response
    const jobs = response.data;
   

    // Return the data as props
    return {
      props: {
        jobs,
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

export default eosl;
