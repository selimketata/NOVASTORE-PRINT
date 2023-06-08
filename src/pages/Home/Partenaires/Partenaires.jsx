import React from "react";
import { Imageslider } from "./Imageslider";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import "./Partenaires.css";

export const Partenaires = () => {
  return (
    <div>
      <div className="partenaire-container">
        <div className="Partenaire-title">
          <span className="Lettre1">Nos </span>
          <span className="titre">Partenaires</span>
        </div>
      </div>

      <Imageslider Images={[img1, img2, img3]} />
    </div>
  );
};
