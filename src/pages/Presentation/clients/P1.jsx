import React from 'react'
import '../clients/P1.css'
import im1 from './p1.png' 
import im2 from './p2.png'
import im3 from './Group 107.png'
import im5 from './pic1.png' 
import im4 from './pic.png'
import im9 from './pic3.png' 
import im7 from './pic2.png'
import { useState } from 'react'

export function P1() {
  const [currentpage, setCurrentpage] = useState(1)
 
const handleDotClick = () => {
    if(currentpage==1){
    setCurrentpage(2)}
    else if (currentpage===2){
      setCurrentpage(3)}
    else setCurrentpage(1)  
  }

  if (currentpage==1) {
    return (
      <div className="av1">
        <h1>Ce que les clients disent de nous</h1>
        <hr className='light'/>
        <div className='container'>
          <div className='child1'>
            <div className='appostrophe'><img width={90} src ={im3} /></div>
            <div className='text'>
              <p id='avis'>Je recommande fortement ce site à tous ceux qui recherchent un service fiable et de qualité.</p>
            </div>
            <div className='imname1'>
              <div className='im'><img width={90} src ={im2} /></div>
              <div className='name'>
                <p id='nom'>Sami.M</p>
                <p id='p'><strong>- Constantine Constantinople -</strong></p>
              </div>
            </div>
          </div>
          <div className='child2'>
            <div className='appostrophe'><img width={90} src ={im3} /></div>
            <div className='text'>
              <p id="avis">J'ai récemment utilisé ce site web pour la première fois et j'ai été impressionné par la qualité de ses services. La navigation sur le site est facile et intuitive, et j'ai pu trouver rapidement ce que je cherchais. La livraison de ma commande a été rapide et sans problèmes." </p>
            </div>
            <div className='imname'>
              <div className='im'><img width={90} src ={im1} /></div>
              <div className='name'>
                <p id='nom'>Katie.P</p>
                <p id='p'><strong>- Constantine Constantinople -</strong></p>
              </div>
            </div>
          </div> 
        </div>
        <div className='circles'>
          <span className='dot1'></span>
          <span className='dot2'onClick={handleDotClick} ></span>
          <span className='dot3'onClick={()=>{setCurrentpage(3)}}></span>
        </div>
      </div>
    )
  } else if (currentpage==2) {
    return (
      <div className="av1">
        <h1>Ce que les clients disent de nous</h1>
        <hr className='light'/>
      <div className='container'>
      <div className='child1'>
        <div className='appostrophe'><img width={90} src ={im3} /></div>
        <div className='text'> <p id='avis'> Je recommande fortement ce site à tous ceux 
        qui recherchent un service fiable et de qualité.</p></div>
        <div className='imname1'>
        <div className='im'><img width={90} src ={im5} /></div>
          <div className='name'><p id='nom'>Nouha.O</p>
          <p id='p'><strong>- Constantine Constantinople -</strong> </p></div>
          
        </div>
      </div>
      <div className='child2'>
      <div className='appostrophe'><img width={90} src ={im3} /></div>
      <div className='text'> <p id="avis">J'ai récemment utilisé ce site web pour la première fois et j'ai été impressionné par la qualité de ses services. La navigation sur le site est facile et intuitive, et j'ai pu trouver rapidement ce que je cherchais. La livraison de ma commande a été rapide et sans problèmes.." </p></div>
        <div className='imname'>
          <div className='im'><img width={90} src ={im4} /></div>
          <div className='name'> <p id='nom'>Nada.O</p>
          <p id='p'><strong>- Constantine Constantinople -</strong> </p></div>
        </div>
      </div> 

    </div>
     <div className='circles'>
    <span className='dot1' onClick={()=>{setCurrentpage(1)}}></span>
    <span className='dot2'></span>
    <span className='dot3'onClick={handleDotClick}></span>
    </div>
    </div>
  )}
  else if (currentpage==3) {
    return (
      <div className="av1">
        <h1>Ce que les clients disent de nous</h1>
        <hr className='light'/>
      <div className='container'>
      <div className='child1'>
        <div className='appostrophe'><img width={70} src ={im3} /></div>
        <div className='text'> <p id='avis'> Je recommande fortement ce site à tous ceux 
        qui recherchent un service fiable et de qualité.</p></div>
        <div className='imname1'>
        <div className='im'><img width={70} src ={im7} /></div>
          <div className='name'><p id='nom'>Foulen.f</p>
          <p id='p'><strong>- Constantine Constantinople -</strong> </p></div>
          
        </div>
      </div>
      <div className='child2'>
      <div className='appostrophe'><img width={90} src ={im3} /></div>
      <div className='text'> <p id="avis">J'ai récemment utilisé ce site web pour la première fois et j'ai été impressionné par la qualité de ses services. La navigation sur le site est facile et intuitive, et j'ai pu trouver rapidement ce que je cherchais. La livraison de ma commande a été rapide et sans problèmes.." </p></div>
        <div className='imname'>
          <div className='im'><img width={90}  src ={im9} /></div>
          <div className='name'> <p id='nom'>Foulena.f</p>
          <p id='p'><strong>- Constantine Constantinople -</strong> </p></div>
        </div>
      </div> 

    </div>
     <div className='circles'>
    <span className='dot1' onClick={handleDotClick } ></span>
    <span className='dot2' onClick={()=>{setCurrentpage(2)}}></span>
    <span className='dot3'></span>
    </div>
    </div>
  )}
  }
