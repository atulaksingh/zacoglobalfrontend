import Link from "next/link";
import React, { forwardRef } from "react";
import { Image } from "react-bootstrap";

const SingleTeam = ({ team = {}, className = "" }, ref) => {
  const { image, name, designation, socials } = team;

  return (
    <div ref={ref} className={`team-block ${className}`}>
      <div className="inner-box">
        <div className="image-box">
          <Link href="/store" passHref>
            <div>
              <Image
                src={require(`@/images/zaco/homepage/${image}`).default.src}
                // src={require(`@/images/zaco/004.png`).default.src}
                alt=""
              />
            </div>
          </Link>
          <ul className="social-links clearfix">
            {/* {socials.map(({ id, icon, href }) => (
              <li key={id}>
                <Link href={href} passHref>
                  <span className={icon}></span>
                </Link>
              </li>
            ))} */}
          </ul>
        </div>
        <div className="lower-box">
          <h5 className="text-sm">
            <Link href="/store">{name}</Link>
          </h5>
          {/* <div className="designation">{designation}</div> */}
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SingleTeam);
