import { blogEight } from "@/data/newsSection";
import React from "react";
import { Row } from "react-bootstrap";
import BlogEightSingle from "./BlogEightSingle";

const { tagline, title, blogs,title2 } = blogEight;

const BlogEight = () => {
  return (
    <div className="blog-eight">
      <div className="auto-container">
        <div className="sec-title-eight text-center pb-16">
          <div className="sec-title-eight__text">{tagline}</div>
          <h2 className="sec-title-eight__title  mx-auto">{title}</h2>
          <h2 className="sec-title-eight__title  mx-auto">{title2}</h2>
        </div>
        <Row>
          {blogs.map((blog) => (
            <BlogEightSingle key={blog.id} blog={blog} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default BlogEight;
