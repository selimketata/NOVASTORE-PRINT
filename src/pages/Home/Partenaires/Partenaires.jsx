import React from 'react'
import './Partenaires.css'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img4 from './img4.jpg'
import { Images } from './Images'
export const Partenaires = () => {
  const [numimage,setNumImage]=useState(1)
  const handleChange= (e,I) => {
    setNumImage(numimage+1)
  }
  return (
    <div className='container'>
        <div className='Partenaires-title'>
           <span className='Lettre1'>Nos </span> 
           <span className='titre'>Partenaires</span>
           <hr id='trait' />
        </div>
        <div className='Partners-container'> 
         <ArrowBackIcon className='icon' image={numimage} onClick={handleChange} />  
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <ArrowForwardIcon className='icon' image={numimage}  onClick={handleChange} /> 
        </div>
    </div>
  )
}

