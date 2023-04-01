import React from 'react'
import './Partenaires.css'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {motion} from "framer-motion"
import Images from './Images'
export const Partenaires = () => {
  const [numimage,setNumImage]=useState(img1)
  const handleChange= (e,I) => {
    
    setNumImage({img2})
  }
  return (
    <div className='container'>
        <div className='Partenaires-title'>
           <span className='Lettre1'>Nos </span> 
           <span className='titre'>Partenaires</span>
           <hr id='trait' />
        </div>
        <motion.div className='Partners-container' drag="x"> 
          {/* <button onClick={handleChange}><ArrowBackIcon className='icon' image={numimage} /></button>  */}
              {Images.map((image)=>(
                <img src={image} ></img>
              ))}     
         {/* <button  onClick={handleChange}><ArrowForwardIcon className='icon' image={numimage}  /> </button>  */}
        </motion.div>
    </div>
  )
}

