import React from 'react';
import "./fondateur.css";
function Cadre(){
    
    return(
        < div id="cadre">
            
                        <div id="firstColumn">
                        <div id="title">
                            <span>Notre Fondateur</span>
                        </div>
                        <div id="text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam ornare  ac tortor</p>
                             
                        </div>
                        < div id="author">
                            <div id="noun">Sami M.</div>
                            <div>-Novastore Manager-</div>
                        </div>
                        </div>


                    <img id="image" src="../parrot.jpg" alt="a parrot" />
            
        </div>
    )
}
export default Cadre;