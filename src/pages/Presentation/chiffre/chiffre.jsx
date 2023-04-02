import React from 'react';
import CountUp,{useCountUp} from  'react-countup'
import "./chiffre.css";







function Chiffre({number,adding}){

    /*const {ref:myRef ,inView:myElementIsVisible }=useInView();
    



        


    
    useEffect(()=>{
        if (myElementIsVisible){
        }
    },[myElementIsVisible,])




    
    return(
        <div id="content" ref={myRef}>
            
            <span className="chiffre">{adding}</span>

                  
        </div>


    
    )*/

    useCountUp({
        ref: 'counter',
        end: 100,
        duration:10,
        enableScrollSpy: true,
        scrollSpyDelay: 0,
      });
    
      return (
        <div id="content">
   
          <span className="chiffre" ><CountUp  end={number} enableScrollSpy duration={5} />{adding}</span>
          <div id="label">Lorem ipsum</div> 
        </div>
      );
}
export default Chiffre;