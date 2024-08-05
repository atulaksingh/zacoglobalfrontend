import Link from "next/link";
import React from "react";

const PostControl = () => {
  return (
    <div className="post-control">
      <div className="auto-container">
        <div className="inner clearfix">
          <div className="control prev">
            <Link href="/" passHref>
              <span className="fa fa-angle-left"></span> &nbsp; Previous
            </Link>
          </div>
          <div className="control next">
            <Link href="/" passHref>
              Next &nbsp;<span className="fa fa-angle-right"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostControl;
