import { eventsOne } from "@/data/eventsSection";
import Link from "next/link";
import React from "react";
import { Row } from "react-bootstrap";
import SingleEventsOne from "./SingleEventsOne";

const EventsOne = () => {
  return (
    <div className="events-one">
      <div className="auto-container">
        <Row>
          {eventsOne.map((event) => (
            <SingleEventsOne key={event.id} event={event} />
          ))}
        </Row>

        <div className="more-box text-center">
          <Link href="/events" passHref>
            <div className="theme-btn btn-style-one">
              <i className="btn-curve"></i>
              <span className="btn-title">Load more posts</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsOne;
