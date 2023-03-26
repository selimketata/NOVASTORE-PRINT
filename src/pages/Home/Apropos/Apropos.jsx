import React from 'react'
import './Apropos.css'
import img from './img.jpg'
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
export const Apropos = () => {
  return (
    <section className='Apropos-title'>
      <span className='Apropos-title'>
        <span className='Lettre1'>A</span> 
        <span className='titre'>Propos</span>
      </span>
      <div className='Apropos-container'>
        <img src={img} alt="" />
        <div className='Apropos-text'>
          <span id='title'>Novastore Print</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatibus possimus similique velit dolor aliquid error debitis mollitia voluptates sapiente doloribus blanditiis illum nostrum eos, sed enim dolorem itaque, eaque, asperiores consequuntur sit libero quam nemo laborum. Aut doloribus eligendi, vitae distinctio culpa impedit sunt reiciendis quasi illum maxime? Ut qui saepe eum totam non quia aperiam eos culpa! Magnam quidem, distinctio rem nihil hic deleniti! Repellendus pariatur est quaerat architecto quos eius optio ab mollitia quasi consectetur saepe voluptatem deserunt qui voluptates, eligendi sunt! Facilis ipsam reprehenderit perspiciatis omnis eum adipisci! Voluptates totam sequi omnis fuga eaque iusto ratione debitis culpa quos? Consequuntur, earum possimus? Iste, placeat iure qui possimus ad labore! Blanditiis dolore facere, tempora sequi rerum officiis distinctio fugit ut, veniam necessitatibus hic voluptatum, ex tempore error earum quod odio in nobis nulla. Vero voluptatibus quasi aliquam eos explicabo laborum odio. Accusantium commodi, temporibus quis ad excepturi non fuga at repellat explicabo laboriosam dolores id dolorum ut qui? Impedit, voluptate ea. Nam amet, reiciendis accusantium repellat porro quo distinctio magnam at repudiandae odit quos quaerat aliquid et. Natus ut quae dolorem, omnis porro in nostrum. Adipisci deleniti dolor in deserunt ex id soluta vel eligendi perspiciatis nihil!</span>
          <div><button className='vid-btn'>Voir Video <ArrowForwardSharpIcon/></button></div>
        </div>

      </div>
      
    </section>
    
  )
}

