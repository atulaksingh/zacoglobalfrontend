import { blogPage } from "@/data/sidebarPageContainerTwo";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SidebarSide from "./SidebarSide";
const axios = require("axios");
const ContentSide = dynamic(() => import("./ContentSide"));
const VideoModal = dynamic(() => import("../VideoModal/VideoModal"));

const { videoId } = blogPage;

const SidebarPageContainerTwo = ({ isDetails = false , blogPost,catData }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);



  return (
    <>
      <div className="sidebar-page-container">
        <div className="auto-container">
          <Row className="clearfix">
            <Col lg={8} md={12} sm={12} className="content-side">
      
              <ContentSide handleOpen={handleOpen} blogpost={blogPost} />
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

export default SidebarPageContainerTwo;

