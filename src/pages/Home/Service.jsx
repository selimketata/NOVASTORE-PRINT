import React from "react";
import "./Service.css";
import Row from "../../components/Row";
import Abri2 from "../../assets/abri2.png";
import imp2 from "../../assets/imp2.png";
import plv2 from "../../assets/plv2.png";
import Img1 from "../../assets/Img1.png";
import Img2 from "../../assets/Img2.png";
import Img3 from "../../assets/Img3.png";

function Service() {
  return (
   <div className="service-container"> 
     <h1> <span>NOS</span> services </h1>
    <hr />
   <div className="part">
   
      <div className="back-img" style={{backgroundImage:`url(${Img2}`}}>
       <img src={Abri2} alt="FGHJK" />
       <p>Store & Abri</p>
      </div>

       <div className="back-img" style={{backgroundImage:`url(${Img3}`}}>
        <img src={imp2} alt="FGHJK" />
        <p>Impression <br /> Numérique</p>
       </div>

       <div className="back-img" style={{backgroundImage:`url(${Img1}`}}>
        <img src={plv2} alt="FGHJK" />
       <p>PLV</p>
        </div>
    
   </div>
   
 </div> 
  );
}
export default Service;