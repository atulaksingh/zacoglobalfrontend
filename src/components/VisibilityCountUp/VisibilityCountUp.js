import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const VisibilityCountUp = ({ count }) => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <VisibilitySensor
    offset={{ top: 10 }}
    delayedCall={true}
    onChange={onVisibilityChange}
  >
    {/* Ensure that only a single React element is returned */}
    <div style={{ position: "relative", display: "inline-block" }}>
        <CountUp start={0} end={countStart ? count : 0} duration={2} />
        <FontAwesomeIcon
          icon={faPlus}
          style={{
            position: "absolute",
            top: 0,
            right: -6,
            fontSize: "15px",
            transform: "translate(50%, -50%)", // To adjust the position slightly
          }}
        />
      </div>
  </VisibilitySensor>
  );
};

export default VisibilityCountUp;
