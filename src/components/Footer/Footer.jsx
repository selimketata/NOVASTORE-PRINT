import React from "react";
import "./Footer.css";
import{AiOutlineInstagram} from  "react-icons/ai";
import{FaFacebookF} from "react-icons/fa" ;
import{BsTwitter} from "react-icons/bs" ;
import{AiFillLinkedin,AiOutlineMail} from "react-icons/ai" ;
import{ MdLocationPin} from "react-icons/md";
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import AddLocationIcon from '@mui/icons-material/AddLocation';

 export function Footer(){
    return(

      <div className="footer">
        <div className="map">
            <iframe style={{
                width:"100%",height:"400px"
            }} src="https://www.google.com/maps/embed/v1/place?q=ENSI,+Manouba,+Tunisia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                </iframe>
               
        </div>
        <div className="contact-container">
           <ul>
            <li><CallIcon/></li>
            <li>Phone</li>
            <li>+216 95 655 645</li>
           </ul>
           <ul>
           </ul>
           <ul>
             <li><AddLocationIcon/></li>
             <li>Adresse</li>
             <li>51600 Tunis,Tunisia</li>
           </ul>
           <ul>
              <li><MailIcon/></li>
              <li>Mail</li>
              <li>novastoreprint@gmail.com</li>
            </ul> 
            </div>
            <ul className="contact-icons">
                <li><a href=""><AiOutlineInstagram  size={"30px"}/></a></li>
                <li><a href=""><FaFacebookF size={"25px"}/></a></li>
                <li><a href=""><BsTwitter size={"30px"}/></a></li>
            </ul>

       
      </div>
     
    )
}

