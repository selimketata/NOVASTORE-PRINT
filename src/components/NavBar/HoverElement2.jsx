import React from "react";
import "./HoverElement2.css";
function HoverElement2({ image_url, text }) {
  return (
    <div className="hover-service">
      <div
        className="hover-service-image"
        style={{ backgroundImage: `url(${image_url})` }}
      ></div>
      <div className="hover-service-text">{text}</div>
    </div>
  );
}

export default HoverElement2;
