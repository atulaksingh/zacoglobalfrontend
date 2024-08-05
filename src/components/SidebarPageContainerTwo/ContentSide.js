import { blogPage } from "@/data/sidebarPageContainerTwo";
import Link from "next/link";
import React from "react";
import NewsBlockTwo from "./NewsBlockTwo";

const { title, text, newsData } = blogPage;

const ContentSide = ({ handleOpen ,blogpost}) => {
// console.log("dj",blogpost)

  
  return (
    <>
      <div className="blog-posts">
        {blogpost?.map((news) => (
          <NewsBlockTwo key={news.id} news={news} handleOpen={handleOpen} />
        ))}
        {/* <div className="news-block-three">
          <div className="inner-box">
            <div className="quote-icon">
              <span>“</span>
            </div>
            <div className="text">{text}</div>
            <Link href="/blog-single" passHref>
              <div className="over-link"></div>
            </Link>
          </div>
        </div>

        <div className="news-block-three">
          <div className="inner-box">
            <div className="link-icon">
              <span className="flaticon-link-2"></span>
            </div>
            <h4>
              <Link href="/blog-single" passHref>{title}</Link>
            </h4>
            <Link href="/blog-single" passHref>
              <div className="over-link"></div>
            </Link>
          </div>
        </div> */}
      </div>
      {/* <div className="more-box">
        <Link href="/blog" passHref>
          <div className="theme-btn btn-style-one">
            <i className="btn-curve"></i>
            <span className="btn-title">Load more posts</span>
          </div>
        </Link>
      </div> */}
    </>
  );
};

export default ContentSide;