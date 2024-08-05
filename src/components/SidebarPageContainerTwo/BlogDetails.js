import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/router";
import CommentBox from "./CommentBox";

const BlogDetails = ({ post }) => {
  const [dateString, setDateString] = useState('');

  useEffect(() => {
    if (post?.created_at) {
      const formatDate = (created_at) => {
        const dateObject = new Date(created_at);
        const year = dateObject.getUTCFullYear();
        const month = String(dateObject.getUTCMonth() + 1).padStart(2, '0');
        const day = String(dateObject.getUTCDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };

      setDateString(formatDate(post.created_at));
    }
  }, [post?.created_at]);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const commentData = {
      content: formData.get("content"),
      name: formData.get("name"),
      email: formData.get("email"),
      post: post.id,
    };

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      });

      if (response.ok) {
        const newComment = await response.json();
        router.reload(); // Reload the page to display the new comment
      } else {
        console.error("Failed to submit comment:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred while submitting the comment:", error);
    }
  };

  return (
    <div className="blog-details">
      <div className="post-details">
        <div className="inner-box">
          <div className="image-box">
            <Link href="/blog" passHref legacyBehavior>
              <a>
                <Image
                  src={post?.featured_image}
                  alt={post?.title}
                  width={500}
                  height={300}
                  layout="responsive"
                />
              </a>
            </Link>
          </div>
          <div className="lower-box">
            <div className="post-meta">
              <ul className="clearfix">
                <li>
                  <span className="far fa-clock"></span> {dateString}
                </li>
                <li>
                  <span className="far fa-user-circle"></span> {post?.author}
                </li>
                <li>
                  <span className="far fa-comments"></span> {post?.comments?.length || 0} Comments
                </li>
              </ul>
            </div>
            <h4>{post?.title}</h4>
            <div className="text">
              <div>{post?.content}</div>
            </div>
          </div>
        </div>
        <div className="info-row clearfix">
          <div className="cat-info">
            <strong>Category:</strong>{" "}
            {post?.categories?.map((cate, i) => (
              <Fragment key={i}>
                <Link href={`/blog/${cate.id}`} passHref legacyBehavior>
                  <a>{cate.name}</a>
                </Link>
                {post.categories.length !== i + 1 && ", "}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="comments-area">
        <div className="comments-title">
          <h3>{post?.comments?.length || 0} Comments</h3>
        </div>
        {post?.comments?.map((comment) => (
          <CommentBox key={comment.id} comment={comment} />
        ))}
      </div>
      <div className="leave-comments">
        <div className="comments-title">
          <h3>Leave a comment</h3>
        </div>
        <div className="default-form comment-form">
          <form onSubmit={handleSubmit}>
            <Row className="clearfix">
              <Col md={12} sm={12} className="form-group">
                <textarea
                  name="content"
                  placeholder="Your Comment"
                  required
                ></textarea>
              </Col>
              <Col md={6} sm={12} className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </Col>
              <Col md={6} sm={12} className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </Col>
              <Col md={12} sm={12} className="form-group">
                <button type="submit" className="theme-btn btn-style-one">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Submit Comment</span>
                </button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`http://django:8000/api/posts/${id}`);
  const post = await res.json();

  return {
    props: { post },
  };
}

export default BlogDetails;
