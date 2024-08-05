import { teamFour } from "@/data/teamSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const TeamFour = () => {
  return (
    <div className="team-four">
      <div className="auto-container">
        <Row>
          {teamFour.map(({ id, image, name, designation, socials }) => (
            <Col key={id} md={6} lg={3}>
              <div className="team-four__card">
                <div className="team-four__image">
                  <Image
                    src={
                      require(`@/images/update-01-10-2021/resources/${image}`)
                        .default.src
                    }
                    alt=""
                  />
                </div>
                <h3 className="team-four__name">{name}</h3>
                <div className="team-four__designation">{designation}</div>
                <div className="team-four__social">
                  {socials.map(({ id, icon, href }) => (
                    <Link key={id} href={href} className={icon}></Link>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default TeamFour;
