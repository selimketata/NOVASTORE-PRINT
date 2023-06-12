import React from "react";
import "./Contacts.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import CallIcon from "@mui/icons-material/CallOutlined";
import MailIcon from "@mui/icons-material/MailOutlined";
import AddLocationIcon from "@mui/icons-material/AddLocationOutlined";

export function Contacts() {
  return (
    <div className="contact">
      <div className="map">
        <iframe
          style={{
            width: "100%",
            height: "400px",
          }}
          src="https://www.google.com/maps/embed/v1/place?q=ENSI,+Manouba,+Tunisia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
      <div className="contact-container">
        <ul>
          <li>
            <CallIcon sx={{ fontSize: "3vw" }} />
          </li>
          <li>Téléphone</li>
          <li>+216 95 655 645</li>
        </ul>
        <ul>
          <li>
            <AddLocationIcon sx={{ fontSize: "3vw" }} />
          </li>
          <li>Adresse</li>
          <li>51600 Tunis,Tunisia</li>
        </ul>
        <ul>
          <li>
            <MailIcon sx={{ fontSize: "3vw" }} />
          </li>
          <li>Email</li>
          <li>novastoreprint@gmail.com</li>
        </ul>
      </div>
      <ul className="contact-icons">
        <li>
          <a href="">
            <AiOutlineInstagram style={{ fontSize: "35px" }} />
          </a>
        </li>
        <li>
          <a href="">
            <FaFacebookF style={{ fontSize: "35px" }} />
          </a>
        </li>
        <li>
          <a href="">
            <BsTwitter style={{ fontSize: "35px" }} />
          </a>
        </li>
      </ul>
    </div>
  );
}
