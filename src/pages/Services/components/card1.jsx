import  {React, useState } from 'react'
import {Card,Box,Typography,Button,CardContent}from"@mui/material"
import Styled from"@emotion/styled"
import img1 from'../photos/image1.png'
import img2 from'../photos/image2.png'
import img3 from'../photos/image3.png'
import before from"../photos/before.png"
import after from"../photos/after.png"
import "./cards.css"
const StyledContent=Styled(CardContent)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
})
const StyledText=Styled(Typography)({
    fontFamily:"Lato",
    fontWeight:"bolder",
    display:'inline'   
})
const TextBox=Styled(Box)({ margin:"15px"})
const StyledBox=Styled(Box)({
    margin:"10px",display:"flex",justifyContent:"space-evenly",alignItems:"center",height:"60%",width:"100%",
})

function Card1 () {
 const[index,SetIndex]=useState(1)
 const images = [img1, img2, img3];
 const clicked=()=>{
    SetIndex((index + 1) % 3)
    
 }     
 const Rclicked=()=>{
    SetIndex(((index + 3) -1) % 3)
 }     
  return (<Box> 
    <Card sx={{backgroundColor: { xs: "white",sm:"#F8F5EC"}}}>
       <div className="back">
        <CardContent sx={{textAlign:"center"}}>   
                 <TextBox  >
                <StyledText variant='h3'>Store<StyledText variant='h3'sx={{color:"#57C9EA"}}> & </StyledText>Abris</StyledText>
                </TextBox>
                <Typography variant="subtitle2">Azert fhjir bjheyt rety byby bsjkkz o ksdn onuroaz ch djdjd ppzhdo koijhgboistulier maids il najamais fait ca.</Typography>
                
           
            
             <StyledContent>
                <Button onClick={clicked} variant="contianed"><img className='buttons' src={before}/></Button>
             <StyledBox >
                
            <Box  sx={{display:{xs:"none",sm:"block"}}}><img className='image1' src={images[(index + images.length - 1) % images.length]}/></Box>
            <Box ><img className='image2' src={images[index]} alt="img2" /></Box>
            <Box sx={{display:{xs:"none",sm:"block"}}}><img className='image3' src={images[(index + 1) % images.length]} alt="img3" /></Box>
            </StyledBox>
            <Button onClick={Rclicked} variant="contianed"><img className='buttons' src={after}/></Button>
            </StyledContent>        
        </CardContent>
        </div> 
    </Card> </Box>
     )
}

export default Card1