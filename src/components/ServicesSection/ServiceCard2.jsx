import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogEightSingle from '../NewsSection/BlogEightSingle'
import { blogEight } from '@/data/newsSection';
import TextSplit from '../Reuseable/TextSplit';
const { tagline, title, blogs, title2 } = blogEight;
function ServiceCard2() {
    return (
        <>
            <section
                // ref={ref}
                // className={`services-section-three ${className}`}
                id="services"
            >
                <div className="auto-container">
                    <div className="sec-title centered">
                        <h2>
                            {title} <span className="dot">.</span>
                        </h2>
                    </div>
                    <div className="services">
                        <Row className="clearfix">
                            <Col xl={3} lg={6} md={6} sm={12} className="service-block-two">
                                <div className="inner-box animated fadeInUp">
                                    <div className="bottom-curve"></div>
                                    <div className="icon-box">
                                        <span className={icon}></span>
                                    </div>
                                    <h5>
                                        <a href="#">
                                            <TextSplit text={title} />
                                        </a>
                                    </h5>
                                    <div className="text">{text}</div>
                                    <div className="link-box">
                                        <a href="#">
                                            <span className="fa fa-angle-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ServiceCard2