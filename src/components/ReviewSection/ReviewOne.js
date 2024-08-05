import { reviewOne } from "@/data/productDetails";
import React from "react";
import CommentBox from "./CommentBox";

const ReviewOne = () => {
  return (
    <div className="review-one">
      <div className="auto-container">
        <div className="comments-area">
          <div className="comments-title">
            <h3>{reviewOne.length} Comments</h3>
          </div>
          {reviewOne.map((review) => (
            <CommentBox key={review.id} comment={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewOne;
