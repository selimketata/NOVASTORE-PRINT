import React from "react";
import Cadre from "./fondateur/fondateur";
import "./Presentation.css";

import NosChiffre from "./chiffre/NosChiffre";
import "./chiffre/chiffre.css";

import Video from "../../components/Video";
function Presenation() {
  return (
    <>
      <div className="main">
        <Video />
      </div>
      <div id="presentation">
        <NosChiffre />
        <Cadre />
      </div>
      ;
    </>
  );
}

export default Presenation;
