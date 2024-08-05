import Link from "next/link";
import React from "react";

const CallToSectionFour = () => {
  return (
    <div className="call-to-section-four">
      <div className="auto-container">
        <h3 className="call-to-section-four__title">
          Linoor Finance & Consultation HTML Template
        </h3>
        <Link
          href="https://themeforest.net/item/linoor-digital-agency-services-html-template/27318759?s_rank=2"
          target="_blank"
          className="thm-btn__eight call-to-section-four__btn"
          rel="noreferrer"
          passHref
        >
          purchase now
        </Link>
      </div>
    </div>
  );
};

export default CallToSectionFour;
