import teamSection from "@/data/teamSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import SingleTeam from "./SingleTeam";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const responsive1 = {
  600: {
    items: 2,
    gutter: 30,
  },
  992: {
    items: 3,
    gutter: 30,
  },
  1200: {
    items: 4,
    gutter: 30,
  },
  1500: {
    items: 4,
    gutter: 30,
  },
  1600: {
    items: 5,
    gutter: 30,
  },
};

const responsive2 = {
  600: {
    items: 2,
    gutter: 30,
  },
  992: {
    items: 3,
    gutter: 30,
  },
  1200: {
    items: 3,
    gutter: 30,
  },
  1500: {
    items: 3,
    gutter: 30,
  },
  1600: {
    items: 3,
    gutter: 30,
  },
};

const settings = {
  container: ".my-slider-19",
  loop: true,
  lazyload: true,
  navPosition: "bottom",
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  // nav: false,
  speed: 300, // Adjust the speed of the transitions if necessary
  autoplayTimeout: 1500,
};

const { title, teams } = teamSection;

const TeamSection = ({ onePage = false }) => {
  const listRef = useRef(null);
  const ref = useActive("#team");

  return (

    <>
       <div ref={ref} className="team-section no-padd-top mt-24 mx-24" id="team">
      <div className="auto-container">
        {/* <h2>
            {title}
            <span className="dot">.</span>
          </h2> */}
        <div className="sec-title-six centered">
          <h2 className="sec-title-six__title">{title}</h2>
        </div>

      </div>
      <div className={onePage ? "auto-container" : ""}>
        <div className="carousel-box">
          <div
            className={onePage ? "team-carousel__one-page" : "team-carousel"}
          >
            <TinySlider
              options={{
                ...settings,
                responsive: onePage ? responsive2 : responsive1,
                // nav: !onePage,
                nav: false,
                
              }}
              ref={listRef}
            >
              {teams.map((team) => (
                <SingleTeam key={team.id} team={team} ref={listRef} />
              ))}




            </TinySlider>
          </div>
        </div>
      </div>
    </div>

    
    
    
    </>
 
  );
};

export default TeamSection;
