

import { blogPage } from "@/data/sidebarPageContainerTwo";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SidebarSide from "./SidebarSide";
const axios = require("axios");
const BlogDetails = dynamic(() => import("./BlogDetails"));
const ContentSide = dynamic(() => import("./ContentSide"));
const VideoModal = dynamic(() => import("../VideoModal/VideoModal"));

const { videoId } = blogPage;

const BlogPageData = ({ isDetails = false , postId ,blogPost,catData}) => {
  const [isOpen, setOpen] = useState(false);
//   const [blogPost, setBlogPost] = useState([]);
//   const [catData, setCatData] = useState([]);
//   const handleOpen = () => setOpen(true);

   
//  async function fetchData() {
//   try {
//     // Check if postId is provided

//     // Await the Axios GET request
//     const response = await axios.get(`http://127.0.0.1:8000/api/blogposts/${postId}/`);

//     // Handle the response data
//     setBlogPost(response.data);
//   } catch (error) {
//     // Handle any errors
//     console.error("Error fetching data:", error);
//   }
// }

// async function fetchCatData() {
//   try {
   

//     // Await the Axios GET request
//     const response = await axios.get("http://127.0.0.1:8000/api/categories/");

//     // Handle the response data
//     setCatData(response.data);
//   } catch (error) {
//     // Handle any errors
//     console.error("Error fetching data:", error);
//   }
// }

// useEffect(() => {
//   // Call the async function
//   fetchData();
//   fetchCatData()
// }, [postId]);  // Add postId to dependency array


  return (
    <>
      <div className="sidebar-page-container">
        <div className="auto-container">
          <Row className="clearfix">
            <Col lg={8} md={12} sm={12} className="content-side">
            <BlogDetails post={blogPost} />
    
            </Col>
            <Col lg={4} md={12} sm={12} className="sidebar-side">
              <SidebarSide catData={catData}/>
            </Col>
          </Row>
        </div>
      </div>
      {!isDetails && (
        <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
      )}
    </>
  );
};

export default BlogPageData;

