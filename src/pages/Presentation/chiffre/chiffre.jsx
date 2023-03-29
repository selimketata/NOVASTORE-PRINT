import React,{useState,useRef,useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import "./chiffre.css";

function useIncrement(initial,step){
    const[count,setCount]=useState(initial)
    const increment=()=>{
        setCount(c=>c+step)
    }
    return [count,increment]
}


function Chiffre(){

    const {ref:myRef ,inView:myElementIsVisible }=useInView();


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
        if (count<=a){
            window.setInterval(()=>{
                increment()
                },
            2000)
        }
    }
   if (myElementIsVisible){
    fixation(66)
   }*/

   //incrementation chaotic

   //incrementation double ???????
    return(
        <div>
            
            <span className={`${myElementIsVisible ? "chiffreAnime" :"chiffre"}`} ref={myRef}  >15</span>
            <div id={`${myElementIsVisible ? "divi" :"diviAnime"}`}></div>       
        </div>
    )
}
export default Chiffre;