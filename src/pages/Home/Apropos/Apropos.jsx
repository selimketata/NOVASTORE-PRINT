import React, { useState, useEffect } from "react";
import "./Apropos.css";
import img1 from "./img.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.PNG";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";

export const Apropos = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3,img4];
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="Apropos-title" id="Presentation">
      <span className="Apropos-title">
        <span className="Lettre1">À </span>
        <span className="titre">Propos</span>
        <hr id="trait1" />
      </span>
      <div className="Apropos-container">
        <div className="imaage"><img className="image" src={images[currentImageIndex]} alt="" /></div>
        <div className="Apropos-text">
          <p>
            <span id="title">Novastore Print</span> Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. A quibusdam velit, deserunt iusto
            porro qui ducimus aspernatur ratione quis nam dolores ipsam repellat
            vitae ut natus numquam voluptatem fugiat earum ex quisquam!
            Voluptates quaerat neque vel harum quod tempora nulla pariatur!
            Libero aliquid odit maxime? Placeat perspiciatis cum numquam
            similique!
          </p>
          <div
            className="btn"
            onClick={() => {
              navigate("/presentation#video");
            }}
          >
            <button className="vid-btn">
              Voir Video <AiOutlineArrowRight className="icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
