import React from 'react'
import '../clients/P1.css'
 export function P2() {
  return (
    <div>
      <h1>Ce que les clients disent de nous</h1>
      <hr className='light'/>
    <div className='container'>
      <div className='child1'>
        <div className='text'> <p id='avis'> Je recommande fortement ce site à tous ceux 
        qui recherchent un service fiable et de qualité.</p></div>
        <div className='imname'>
        <div className='im'>imaaaaaaaaage</div>
          <div className='name'><p id='name'>Sami.M</p>
          <p id='p'><strong>- Constantine Constantinople -</strong> </p></div>
          
        </div>
      </div>
      <div className='child2'>
      <div className='text'> <p id="avis">J'ai récemment utilisé ce site web pour la première fois et j'ai été impressionné par la qualité de ses services. La navigation sur le site est facile et intuitive, et j'ai pu trouver rapidement ce que je cherchais. La livraison de ma commande a été rapide et sans problèmes.." </p></div>
        <div className='imname'>
          <div className='im'>imaaaaaaaaage</div>
          <div className='name'> <p id='name'>Katie.P</p>
          <p id='p'><strong>- Constantine Constantinople -</strong> </p></div>
        </div>
      </div>

    </div> <div className='circles'>
    <span className='dot' ></span>
    <span className='dot'></span>
    <span className='dot'></span>
    </div>
 
    </div>
  )}