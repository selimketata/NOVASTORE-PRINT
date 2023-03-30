import React from "react";
import Cadre from "./fondateur/fondateur"
import "./Presentation.css";


import NosChiffre from "./chiffre/NosChiffre"
import "./chiffre/chiffre.css";

function Presenation() {
  return <div>
    <NosChiffre />
    <Cadre />
    
  </div>;

}

export default Presenation;
