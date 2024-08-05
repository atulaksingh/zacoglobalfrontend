import { sidebar } from "@/data/sidebarPageContainerTwo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Image } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { categories, tags, comments, posts } = sidebar;

const SidebarSide = ({ catData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
  };

  return (
    <div className="sidebar blog-sidebar">
      {/* <div className="sidebar-widget search-box">
        <div className="widget-inner">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="search"
                name="search"
                placeholder="Search"
                required
              />
              <button type="submit">
                <span className="icon flaticon-magnifying-glass-1"></span>
              </button>
            </div>
          </form>
        </div>
      </div> */}

      <div className="sidebar-widget recent-posts">
        {/* <div className="widget-inner">
          <div className="sidebar-title">
            <h4>Latest Posts</h4>
          </div>

          {posts.map(({ id, title, image }) => (
            <div key={id} className="post">
              <figure className="post-thumb">
                <Image
                  src={require(`@/images/resource/${image}`).default.src}
                  alt=""
                />
              </figure>
              <h5 className="text">
                <Link href={`/blog-single/${id}`} passHref>
                  {title}
                </Link>
              </h5>
            </div>
          ))}
        </div> */}
      </div>

      <div className="sidebar-widget archives">
        <div className="widget-inner">
          <div className="sidebar-title">
            <h4>Categories</h4>
          </div>
          <ul>
          {catData && Array.isArray(catData) ? (
          catData.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/category/${id}`} passHref>
                {name}
              </Link>
            </li>
          ))
        ) : (
          <li>No categories available</li>
        )}
          </ul>
        </div>
      </div>

      {/* <div className="sidebar-widget popular-tags">
        <div className="widget-inner">
          <div className="sidebar-title">
            <h4>Tags</h4>
          </div>
          <div className="tags-list clearfix">
            {tags.map(({ id, title, href }) => (
              <Fragment key={id}>
                <Link href={href || "#"} passHref>
                  {title}
                </Link>
                {tags.length !== id && ", "}
              </Fragment>
            ))}
          </div>
        </div>
      </div> */}

      {/* <div className="sidebar-widget recent-comments">
        <div className="widget-inner">
          <div className="sidebar-title">
            <h4>Comments</h4>
          </div>
          {comments.map(({ id, text }) => (
            <div key={id} className="comment">
              <div className="icon">
                <span className="flaticon-speech-bubble-2"></span>
              </div>
              <h5 className="text">
                <Link href="#" passHref>
                  <TextSplit text={text} />
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default SidebarSide;
