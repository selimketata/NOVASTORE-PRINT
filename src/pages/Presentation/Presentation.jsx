import React from "react";
import Cadre from "./fondateur/fondateur"
import "./Presentation.css";


import NosChiffre from "./chiffre/NosChiffre"
import "./chiffre/chiffre.css";

function Presenation() {
  return <div id="presentation">
    <NosChiffre />
    <Cadre />
    
  </div>;

}

export default Presenation;
