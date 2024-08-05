

import teamSection from "@/data/teamSection";
import useActive from "@/hooks/useActive";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
// import SingleTeam from "../TeamSection/SingleTeam";
import Link from "next/link";
import { Image } from "react-bootstrap";

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
    container: ".my-slider",
    loop: false,
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
};



const ZacoStoreCard1 = (props) => {
    const { title, brands, } = props;
    const oneePage = false
    console.log("pp",props)
    const listRef = useRef(null);
    const ref = useActive("#team");

    return (
        <div ref={ref} className="team-section no-padd-top mt-24 mx-24" id="team">
            <div className="auto-container">
              
                <div className="sec-title-six centered">
                    <h2 className="sec-title-six__title">{title}</h2>
                </div>

            </div>
            <div className={oneePage ? "auto-container" : ""}>
                <div className="carousel-box">
                    <div
                        className={oneePage ? "team-carousel__one-page" : "team-carousel"}
                    >

                        <TinySlider
                            options={{
                                ...settings,
                                responsive: oneePage ? responsive2 : responsive1,
                                nav: !oneePage,
                            }}
                            ref={listRef}
                        >





                            {brands.map((team,index) => (
                                <div ref={ref} key={index} className={`team-block`}>
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <Link href="/about" passHref>
                                                <div>
                                                    <Image
                                                        src={require(`@/images/zaco/${team.image}`).default.src}
                                                        alt=""
                                                    />
                                                </div>
                                            </Link>
                                            <ul className="social-links clearfix">

                                            </ul>
                                        </div>
                                        <div className="lower-box">
                                            <h5 className="text-sm">
                                                <Link href="/">{team.name}</Link>
                                            </h5>
                                        </div>
                                    </div>
                                </div>

                            ))}





                        </TinySlider>
                    </div>
                </div>
            </div>
        </div>

    
    );
};

export default ZacoStoreCard1;
