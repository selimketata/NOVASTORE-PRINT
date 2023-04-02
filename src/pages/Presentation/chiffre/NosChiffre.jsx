import React from 'react'
import Chiffre from './chiffre'
import './NosChiffres.css'

function  NosChiffres(){
    
    return(
        <div id="content">
            <div id="test"></div>
            <span id="titleChiffre">Nos Chiffres</span>
            <span id="bolderText">When we get to work we really make things happen fast and powerfully</span>
            <span id="lighterText">I want to fly like an angel flare on a ten feet snare I want to dance until the sun comes up I want to fight your cousin.</span>
            <div id="chiffres">
                
                
                <Chiffre number="25" adding="K" />

                <div className='separation'>
                    <Chiffre number="1500" adding="+"/>
                </div>

                <Chiffre number="750" adding=""/>
            </div>
        </div>
    )
}
export default NosChiffres;