
// import React, { useState } from 'react';
//  import './Imageslider.css' 
//  import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
//  import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

//  export const Imageslider = ({Images}) => {
//        const [currentIndex, setCurrentIndex] = useState(0);    
//        const prevImage = () => {
//          const index = currentIndex === 0 ? Images.length - 1 : currentIndex - 1;
//          setCurrentIndex(index);
//        };
    
//        const nextImage = () => {
//          const index = currentIndex === Images.length - 1 ? 0 : currentIndex + 1;
//          setCurrentIndex(index);
//        };
    
//        return (
//          <div className="image-slider">
//            <div className="image-slider-container">
//              {Images.map((image, index) => (
//                <div
//                  key={index}
//                  className={`image-slide ${index === currentIndex ? 'active' : ''}`}
//                  style={{
//                    transform: Images.length > 3 ? `translateX(-${currentIndex *1}%)` : 'none'

//                  }}
//               >
//                  <img src={image} alt={`Image ${index}`} />
//                </div>
//              ))}
//            </div>
//            <button className="prev-btn" onClick={prevImage}> <ArrowBackRoundedIcon/>
//            </button>
//            <button className="next-btn" onClick={nextImage}> <ArrowForwardRoundedIcon/>
           
//           </button>
//          </div>
//      );
   
//    }

// import React, { useState } from 'react';
// import './Imageslider.css' 
// import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
// import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

// export const Imageslider = ({Images}) => {
//   const [currentIndex, setCurrentIndex] = useState(0);    
  
//   const prevImage = () => {
//     const index = currentIndex === 0 ? Images.length - 1 : currentIndex - 1;
//     setCurrentIndex(index);
//   };

//   const nextImage = () => {
//     const index = currentIndex === Images.length - 1 ? 0 : currentIndex + 1;
//     setCurrentIndex(index);
//   };
  
//   const slideWidth = 100 / Images.length;

//   return (
//     <div className="image-slider">
//       <div className="image-slider-container"
//         style={{ 
//           transform: `translateX(-${currentIndex * slideWidth}%)`,
//           width: `${Images.length * 100}%`
//         }}
//       >
//         {Images.map((image, index) => (
//           <div
//             key={index}
//             className={`image-slide ${index === currentIndex ? 'active' : ''}`}
//             style={{ width: `${slideWidth}%` }}
//           >
//             <img src={image} alt={`Image ${index}`} />
//           </div>
//         ))}
//       </div>
//       <button className="prev-btn" onClick={prevImage}>
//         <ArrowBackRoundedIcon />
//       </button>
//       <button className="next-btn" onClick={nextImage}>
//         <ArrowForwardRoundedIcon />
//       </button>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import './Imageslider.css';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { useMediaQuery } from '@mui/material';

export const Imageslider = ({ Images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const prevImage = () => {
    const index = currentIndex === 0 ? Images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const index = currentIndex === Images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="image-slider">
      {Images.length > 1 && (
      <button className="prev-btn" onClick={prevImage}>
            {' '}
            <ArrowBackRoundedIcon sx={{ fontSize: isSmallScreen ? 35 : 60 }} />
          
          </button>
           )}
      <div className="image-slider-container">
        {Images.map((image, index) => (
          <div
            key={index}
            className={`image-slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(-${currentIndex * 2}%)`,
                width: `${100 / Images.length}%`,
            }}
          >
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      {Images.length > 1 && (
        
          <button className="next-btn" onClick={nextImage}>
            {' '}
            <ArrowForwardRoundedIcon sx={{ fontSize: isSmallScreen ? 30 : 60 }}/>
          </button>
        
      )}
    </div>
  );
};