import React from "react";
import "./fondateur.css";

function Cadre(props) {
  return (
    <div id="fondateur">
      <div id="cadre">
        <div id="firstColumn">
          <div id="fondateur-title">
            <span>No</span>
            <span id="color-fondateur">s Fo</span>
            <span>ndateurs</span>
          </div>
          <div id="fondateur-text">
            <p>{props.text}</p>
          </div>
          <div id="author-container">
            <div id="author">
              <div id="noun">{props.name}</div>
              <div>{props.status}</div>
            </div>
          </div>
        </div>

        <div id="image"></div>
      </div>
    </div>
  );
}
export default Cadre;
