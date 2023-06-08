import React from "react";
import "./Services.css";
import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import Card3 from "./components/card3";

function Services() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const navbarHeight = (window.innerHeight * 12) / 100;
    if (window.location.hash === "#section1") {
      window.scrollTo({
        top: section1Ref.current.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    } else if (window.location.hash === "#section2") {
      window.scrollTo({
        top: section2Ref.current.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    } else if (window.location.hash === "#section3") {
      window.scrollTo({
        top: section3Ref.current.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <Box>
      <div ref={section1Ref}>
        <Card1 />
      </div>
      <div ref={section2Ref}>
        <Card2 />
      </div>
      <div ref={section3Ref}>
        <Card3 />
      </div>
    </Box>
  );
}
export default Services;
