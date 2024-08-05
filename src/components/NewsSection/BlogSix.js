import { blogSix } from "@/data/newsSection";
import React from "react";
import { Row } from "react-bootstrap";
import SingleBlogSix from "./SingleBlogSix";

const { tagline, title, blogs } = blogSix;

const BlogSix = () => {
  return (
    <div className="blog-six">
      <div className="auto-container">
        <div className="sec-title-six text-center">
          <div className="sec-title-six__text">
            <span>{tagline}</span>
          </div>
          <h2 className="sec-title-six__title">{title}</h2>
        </div>
        <Row>
          {blogs.map((blog) => (
            <SingleBlogSix key={blog.id} blog={blog} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default BlogSix;
