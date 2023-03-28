import React from 'react'
import {Card,Box,Typography,Button,CardContent}from"@mui/material"
import Styled from"@emotion/styled"
import img1 from'../photos/image1.png'
import img2 from'../photos/image2.png'
import img3 from'../photos/image3.png'
import before from"../photos/before.png"
import after from"../photos/after.png"
import "./cards.css"
const StyledCard=Styled(Card)({
    backgroundColor:"#F8F5EC",
    
})
const StyledContent=Styled(CardContent)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"

})
const StyledText=Styled(Typography)({
    fontFamily:"Lato",
    fontWeight:"bolder",
    display:'inline'    
}
)
const TextBox=Styled(Box)({ margin:"15px"})
const StyledBox=Styled(Box)({
    margin:"10px",display:"flex",justifyContent:"space-between",alignItems:"center",height:"60%",width:"100%",
})
function card2() {
  return (<Box> 
    <StyledCard>
        <CardContent sx={{textAlign:"center"}}>
            <TextBox >
                <StyledText variant='h3'>Impression <StyledText variant='h3'sx={{color:"#57C9EA"}}>Numérique</StyledText></StyledText><br />
                </TextBox> 
                <Typography variant="subtitle2">Azert fhjir bjheyt rety byby bsjkkz o ksdn onuroaz ch djdjd ppzhdo koijhgboistulier maids il najamais fait ca.</Typography>
            
                <StyledContent>
                <Button variant="contianed"><img className='buttons' src={before}/></Button>
            <StyledBox >
            <Box sx={{display:{xs:"none",sm:"block"}}}><img className='images' src={img1}/></Box>
            <Box><img className='images' src={img2} alt="img2" /></Box>
            <Box sx={{display:{xs:"none",sm:"block"}}}><img className='images' src={img3} alt="img3" /></Box>
            </StyledBox>
            <Button variant="contianed"><img className='buttons' src={after}/></Button>
            </StyledContent>         
        </CardContent>
    </StyledCard> </Box>
     )
}

export default card2