import React from 'react'
import './Apropos.css'
import img from './img.jpg'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import {AiOutlineArrowRight} from'react-icons/ai'
export const Apropos = () => {
  return (
    <section className='Apropos-title' id='Presentation'>
      <span className='Apropos-title'>
        <span className='Lettre1'>A</span> 
        <span className='titre'>Propos</span>
        <hr id='trait1' />
      </span>
      <div className='Apropos-container'>
        <img className='image' src={img} alt="" />
        <div className='Apropos-text'>
          <p> <span id='title'>Novastore Print</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quibusdam velit, deserunt iusto porro qui ducimus aspernatur ratione quis nam dolores ipsam repellat vitae ut natus numquam voluptatem fugiat earum ex quisquam! Voluptates quaerat neque vel harum quod tempora nulla pariatur! Libero aliquid odit maxime? Placeat perspiciatis cum numquam similique!</p>
          <div className='btn'><button className='vid-btn'>Voir Video < AiOutlineArrowRight className='icon'/></button></div>
        </div>

      </div>
      
    </section>
    
  )
}

