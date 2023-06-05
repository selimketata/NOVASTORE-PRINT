import React from 'react';
import "./fondateur.css";

function Cadre(props){
    
    return(
        <div id="fondateur">
        < div id="cadre">
            
                        <div id="firstColumn">
                        <div id="title">
                            <span>Notr</span><span id="color-fondateur">e Fo</span><span>ndateur</span>
                        </div>
                        <div id="text">
                            <p>{props.text}</p>
                             
                        </div>
                        <div id="author-container">
                        < div id="author" >
                            <div id="noun">{props.name}</div>
                            <div>{props.status}</div>
                        </div>
                        </div>
                        </div>


                        <div id="image" ></div>
            
        </div>
        </div>
    )
}
export default Cadre;