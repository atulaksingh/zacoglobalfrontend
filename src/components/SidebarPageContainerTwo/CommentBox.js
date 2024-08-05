import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

const CommentBox = ({ comment = {} }) => {
  const { image,name, author, created_at, content
  } = comment;
// console.log("comment",comment)

const [dateString, setDateString] = useState('');

useEffect(() => {
  if (created_at) {
    const formatDate = (created_at) => {
      const dateObject = new Date(created_at);
      const year = dateObject.getUTCFullYear();
      const month = String(dateObject.getUTCMonth() + 1).padStart(2, '0');
      const day = String(dateObject.getUTCDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    setDateString(formatDate(created_at));
  }
}, [created_at]);
  return (
    <div className="comment-box">
      <div className="comment">
        <div className="author-thumb">
          {/* <figure className="thumb">
            <Image
              src={require(`@/images/resource/${image}`).default.src}
              alt=""
            />
          </figure> */}
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="date">{dateString}</div>
        </div>
        <div className="text">{content
        }</div>
        {/* <div className="reply-btn">
          <Link href="/about" passHref>
            <div className="theme-btn btn-style-one">
              <i className="btn-curve"></i>
              <span className="btn-title">Reply</span>
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default CommentBox;
