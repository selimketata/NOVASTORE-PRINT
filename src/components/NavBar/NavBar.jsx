import React from "react";
import logo from './logo.png'
import './Navbar.css'
import { useState } from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from '@mui/material';

function NavBar() {
  const [isMobile , setIsMobile]=useState(false)
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  let navigate=useNavigate();
  return (
    <nav className="Nav-container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="" />
          <div className="logo-container-title">
           <span className="mot1">NovaStore </span>
           <span className="mot2">Print </span>
          </div>
        </div>
        <div className={isMobile? "Nav-elements-mobile":"Nav-elements"} onClick={()=>setIsMobile(false)}>
          <div className='nav' onClick ={()=>navigate('/')} >Home </div> 
          <div className='nav' onClick ={()=>navigate('/presentation')} >Présentation</div> 
          <div className='nav' >Services</div>
          <div className='nav' >Contact</div>
        </div>
        
         <button className="Nav-btn" onClick={()=>setIsMobile(!isMobile)}><DehazeIcon/></button>
        
      
    </nav>
 )
}

export default NavBar;
