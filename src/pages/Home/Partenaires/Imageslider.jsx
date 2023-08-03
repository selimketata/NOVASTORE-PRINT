import React, { useState, useEffect } from "react";
import "./Imageslider.css";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useMediaQuery } from "@mui/material";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";

export const Imageslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentList, setCurrentList] = useState([]);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const Images = [img1, img3, img5, img4, img2];

  useEffect(() => {
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const offset = Math.floor(currentList.length / 2);
    const start = (currentIndex - offset + Images.length) % Images.length;
    const end = (currentIndex + offset + 1) % Images.length;
    setCurrentList(getNewList(start, end));
  }, [currentIndex]);

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + Images.length) % Images.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % Images.length);
  };

  const getNewList = (start, end) => {
    if (start <= end) {
      return Images.slice(start, end);
    } else {
      return Images.slice(start).concat(Images.slice(0, end));
    }
  };

  const handleResize = () => {
    const windowWidth = window.innerWidth;
     if (windowWidth >= 600) {
      setCurrentList(Images.slice(0, 3));
    } else {
      setCurrentList(Images.slice(0, 1));
    }
  };

  return (
    <div className="image-slider">
      <button className="prev-btn" onClick={prevImage}>
        {" "}
        <ArrowBackRoundedIcon sx={{ fontSize: isSmallScreen ? 33 : 50 }} />
      </button>
      <div className="image-slider-container">
        {currentList.map((image, index) => (
          <div
            key={index}
            className={`image-slide ${index === Math.floor(currentList.length / 2) ? "active" : ""}`}
          >
            <img src={image} alt={`Image ${index}`} className="images" />
          </div>
        ))}
      </div>
      <button className="next-btn" onClick={nextImage}>
        {" "}
        <ArrowForwardRoundedIcon sx={{ fontSize: isSmallScreen ? 33 : 50 }} />
      </button>
    </div>
  );
};
