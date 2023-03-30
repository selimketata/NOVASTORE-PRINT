import React,{useState,useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import "./chiffre.css";

function useIncrement(a){
    const[count,setCount]=useState(0)
    let i=1;
    const increment=()=>{
        while (i<=a){
            let t=i
            setTimeout(setCount(i),i) 
            i++
        }
        
    }
    return [count,increment]
}






function Chiffre(){

    const {ref:myRef ,inView:myElementIsVisible }=useInView();
    const [count,increment]=useIncrement(400)

    useEffect(()=>{
        if (myElementIsVisible){
            increment()
        }
    },[myElementIsVisible,increment])


    /*const myRef= useRef();


    const [myElementIsVisible,setMyElementIsVisible]=useState()


    const [count,increment]=useIncrement(0,2)
    

    useEffect(()=>{
        const observer= new IntersectionObserver((entries)=>{
            const entry=entries[0]
            setMyElementIsVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
        console.log(myElementIsVisible)
    },[myElementIsVisible])




    const fixation=(a)=>{
        while (count<a)
            let i=window.setInterval(()=>{
                increment()
                },
            2000)
            clearInterval(i)
    }
   if (myElementIsVisible){
    fixation(66)
   }*/

   //incrementation chaotic
   //incrementation double ???????

    return(
        <div id="content">
            <span className="chiffre" ref={myRef}  >{count}</span>

            <div id="label">Lorem ipsum</div>       
        </div>
    )
}
export default Chiffre;