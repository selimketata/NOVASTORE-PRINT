import React from "react";
import "./footer.css";
import logo from "../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { BsMessenger, BsInstagram } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import { SlArrowUp } from "react-icons/sl";
function Footer() {
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="logo_div">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
            <p>
              NovaStore <span className="footer-span">Print</span>
            </p>
          </div>
          <div className="para">
            <span className="footer-span">You think it.</span>
            <span className="footer-span">We print it!</span>
          </div>
        </div>
        <div className="lien">
          <h3>USEFUL LINKS</h3>
          <ul className="footer-ul">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/presentation" className="pres">
                PRESENTATION
              </a>
            </li>
            <li>
              <a href="/services">SERVICES</a>
            </li>
            <li>
              <a href="/contacts">CONTACTS</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>NOUS CONTACTER</h3>
          <div className="span">
            <span className="footer-span">+216 22 222 222</span>

            <span className="footer-span">NovaStore@gmail.com</span>
          </div>
          <div className="social">
            <a href="">
              <FaFacebookF size={"15px"} className="icones" />
            </a>
            <a href="">
              <BsInstagram size={"15px"} className="icones" />
            </a>
            <a href="">
              <BsMessenger size={"15px"} className="icones" />
            </a>
          </div>
        </div>
        <div className="new">
          <h3>NEWSLETTER</h3>
          <div className="span">
            <span className="footer-span">Soyer le premier a revecoir</span>
            <span className="footer-span">nos noveautés</span>
          </div>
          <div className="email">
            <input type="email" placeholder="Entrez votre adresse email" />
            <button>
              <RiArrowRightSLine />
            </button>
            <hr />
          </div>
        </div>
      </div>
      <div className="backToTop" style={{ cursor: "pointer" }} onClick={top}>
        <button>
          <SlArrowUp />
        </button>{" "}
        BACK TO TOP
      </div>
      <div className="copy">
        &copy; 2023 NOVASTORE PRINT . All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
