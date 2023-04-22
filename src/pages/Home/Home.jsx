import React from "react";
import "./Home.css";
import { Apropos } from "./Apropos/Apropos";
import {Partenaires} from "./Partenaires/Partenaires";
function Home() {
  return (
   <div className="home">
       <Apropos />
       <Partenaires />
    </div>
)
 
    

}

export default Home;
