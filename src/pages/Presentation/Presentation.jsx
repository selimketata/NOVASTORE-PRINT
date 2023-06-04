import React from "react";
import Fondateur from "./fondateur/lesFondateurs"
import "./Presentation.css";


import NosChiffre from "./chiffre/NosChiffre"
import "./chiffre/chiffre.css";

function Presenation() {
  return <div id="presentation">
    <NosChiffre />
    <Fondateur />
    
  </div>;

}

export default Presenation;
