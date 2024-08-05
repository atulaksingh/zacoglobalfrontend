import React from "react";

const MapBox = () => {
  return (
    <div className="map-box">
      <iframe
        className="map-iframe"
        src="https://maps.google.com/maps?width=554&amp;height=554&amp;hl=en&amp;q=Zaco%20Computers%20,3,%20DLH%20Park,%20S.%20V.%20Road,%20Goregaon%20(West)%20Mumbai+(Zaco%20Computers)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        style={{ border: 0 }}
        aria-hidden={false}
        tabIndex={0}
      ></iframe>

      {/* <iframe
        width="554"
        height="554"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=554&amp;height=554&amp;hl=en&amp;q=Zaco%20Computers%20,3,%20DLH%20Park,%20S.%20V.%20Road,%20Goregaon%20(West)%20Mumbai+(Zaco%20Computers)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe> */}
    </div>
  );
};

export default MapBox;
