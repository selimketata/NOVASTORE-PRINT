import React from 'react'
import Chiffre from './chiffre'
import './NosChiffres.css'

function  NosChiffres(){
    console.log('aziz')

    return(
        <div id="content">
            <span id="titleChiffre">Nos Chiffres</span>
            <span id="bolderText">When we get to work we really make things happen fast and powerfully</span>
            <span id="lighterText">I want to fly like an angel flare on a ten feet snare I want to dance until the sun comes up I want to fight your cousin.</span>
            <div id="chiffres">
                
                <div className='separation'>
                    <Chiffre />
                </div>
                <div className='separation'>
                    <Chiffre />
                </div>
                <Chiffre />
            </div>
        </div>
    )
}
export default NosChiffres;