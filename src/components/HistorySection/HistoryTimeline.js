import { historyTimeline } from "@/data/historySection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const HistoryTimeline = () => {
  return (
    <div className="history-timeline">

      <div className="auto-container">
      <div className="sec-title1 centered lg:mt-40 mb-0"><h2>Simple IT Equipment BuyBack <br /> Process at Zaco</h2></div>
     {/* <div className="leading-[1.25em] block text-[20px] font-[400] text-black"><div>We do more then ever<br />platforms<span className="dot">.</span></div></div> */}

        {historyTimeline.map(({ id, year, items }) => (
          
          <div key={id} className="history-timeline__card">
            {/* <span className="history-timeline__year">{year}</span> */}
                                                                                            
            {items.map(({ id, date, title, text, image }) => (
              <Row key={id}>
                <Col md={12} lg={6}>
                  
                  <div className="history-timeline__info pt-1">
                    <span className="history-timeline__date"></span>
                    <h3 className="history-timeline__title">{title}</h3>

                    <div className="history-timeline__text">{text}</div>
                  </div>
                </Col>
                <Col md={12} lg={6}>
                  {image && (
                    <div className="history-timeline__image">
                      <Image
                        src={
                          require(`@/images/update-26-02-2021/resources/${image}`)
                            .default.src
                        }
                        alt=""
                      />
                    </div>
                  )}
                </Col>
              </Row>
            ))}
          </div>

        ))}
      </div>
    </div>
  );
};

export default HistoryTimeline;
