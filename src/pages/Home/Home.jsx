import React from "react";
import "./Home.css";
import { Apropos } from "./Apropos/Apropos";
import { Partenaires } from "./Partenaires/Partenaires";

import Service from "./components/Service";
import HomeImage from "../../components/HomeImage";
function Home() {
  return (
    <>
      <div className="hero-main">
        <HomeImage />

        <div className="hero-content">
          <h1 className="hero-h1">
            NovaStore<span className="hero-span">Print</span>
          </h1>
          <p className="hero-p">
            <span className="hero-span">Leader</span> de la fabrication des
            stores et abris, les impressions numériques et les PLV.
          </p>
        </div>
      </div>
      <Service />
      <div className="home">
        <Apropos />
        <Partenaires />
      </div>
    </>
  );
}

export default Home;
