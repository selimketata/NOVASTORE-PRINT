import React ,{useState}from "react";
import logo from "../assets/logo.png";
import{FaBars} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import "./Navbar.css";


function Navbar() {
   const [clicked , setClicked] = useState(false);
   const handleClick = () => !setClicked;
   return(
    <div className="container_navbar"> 
       
       <div className="logo">
         <img src={logo} alt="logo" /> 
         <p>NovaStore <span>Print</span></p>
       </div>
       <ul id="container-links" className={clicked ? "#container-links active" :"#container-links"} >
      <NavLink to="/" className="links">
           Home
        </NavLink>
      <NavLink to="/presentation" className="links">
        Présentation
        </NavLink>
      <NavLink to="/services" className="links">
        Services
        </NavLink>
      <NavLink to="/contacts" className="links">
        Contacts
        </NavLink>
       </ul>
       <div className="mobile" onClick={handleClick}>
        <FaBars />
       </div>
    
    </div>

  );
}

export default Navbar;
