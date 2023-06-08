import React from "react";
import logo from "./logo.png";
import "./Navbar.css";
import { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useNavigate } from "react-router-dom";
import HoverElement2 from "./HoverElement2";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  let navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <nav className="Nav-container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="" />
          <div className="logo-container-title">
            <span className="mot1">NovaStore </span>
            <span className="mot2">Print </span>
          </div>
        </div>
        <div
          className={isMobile ? "Nav-elements-mobile" : "Nav-elements"}
          onClick={() => setIsMobile(false)}
        >
          <div
            className={currentPage === "home" ? "nav current-page" : "nav"}
            onClick={() => {
              navigate("/");
              setCurrentPage("home");
            }}
          >
            Home{" "}
          </div>
          <div
            className={
              currentPage === "pres"
                ? "nav nav-pres current-page"
                : "nav nav-pres "
            }
            onClick={() => {
              navigate("/presentation");
              setCurrentPage("pres");
            }}
          >
            Présentation
          </div>
          <div
            className={
              currentPage === "service"
                ? "nav current-page nav-service"
                : "nav nav-service"
            }
            onClick={() => {
              navigate("/services");
              setCurrentPage("service");
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Services
            {isHovered && (
              <div className="nav-hover">
                <div className="hover-container">
                  <HoverElement2
                    image_url={require("../../assets/Img2.png")}
                    text="Store & Abri"
                    dest="section1"
                  />
                  <HoverElement2
                    image_url={require("../../assets/Img3.png")}
                    text="Impression Numérique"
                    dest="section2"
                  />
                  <HoverElement2
                    image_url={require("../../assets/Img1.png")}
                    text="PLV"
                    dest="section3"
                  />
                </div>
              </div>
            )}
          </div>
          <div
            className={
              currentPage === "contact"
                ? "nav current-page nav-contact"
                : "nav nav-contact"
            }
            onClick={() => {
              navigate("/contacts");
              setCurrentPage("contact");
            }}
          >
            Contact
          </div>
        </div>

        <button className="Nav-btn" onClick={() => setIsMobile(!isMobile)}>
          <DehazeIcon
            sx={{
              fontSize: "7vw",
            }}
          />
        </button>
      </nav>
    </>
  );
}

export default NavBar;
