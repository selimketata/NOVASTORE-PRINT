import Slider from "react-slick";
import Cadre from "./fondateur";
import {managers} from "../../../data/data"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Fondateur(){
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  
    return(
        <div>
            <Slider {...settings}>
            {managers.map((item)=>(<Cadre text={item.text} name={item.name} status={item.status}     />))} 
            </Slider>
        </div>
    )
}

export default Fondateur