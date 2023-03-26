import React from 'react'
import '../clients/P1.css'
import im1 from './p1.png' 
import im2 from './p2.png'
import im3 from './Group 107.png'
 export function P1() {
  return (
    <div>
      <h1>Ce que les clients disent de nous</h1>
      <hr className='light'/>
    <div className='container'>
      <div className='child1'>
        <div className='appostrophe'><img width={90} src ={im3} /></div>
        <div className='text'> <p id='avis'> Je recommande fortement ce site à tous ceux 
        qui recherchent un service fiable et de qualité.</p></div>
        <div className='imname1'>
        <div className='im'><img width={90} src ={im2} /></div>
          <div className='name'><p id='nom'>Sami.M</p>
          <p id='p'><strong>- Constantine Constantinople -</strong> </p></div>
          
        </div>
      </div>
      <div className='child2'>
      <div className='appostrophe'><img width={90} src ={im3} /></div>
      <div className='text'> <p id="avis">J'ai récemment utilisé ce site web pour la première fois et j'ai été impressionné par la qualité de ses services. La navigation sur le site est facile et intuitive, et j'ai pu trouver rapidement ce que je cherchais. La livraison de ma commande a été rapide et sans problèmes.." </p></div>
        <div className='imname'>
          <div className='im'><img width={90} src ={im1} /></div>
          <div className='name'> <p id='nom'>Katie.P</p>
          <p id='p'><strong>- Constantine Constantinople -</strong> </p></div>
        </div>
      </div>

    </div> <div className='circles'>
    <span className='dot'></span>
    <span className='dot'></span>
    <span className='dot'></span>
    </div>
 
    </div>
  )}