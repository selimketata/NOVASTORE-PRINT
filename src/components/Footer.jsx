import  {React } from 'react'
import {Box,Typography,List, ListItemButton, ListItemText, ListItem, ListItemIcon, TextField, Button, IconButton}from"@mui/material"
import Styled from"@emotion/styled"
import "./footer.css"
import logo from "../assets/logo.png"
import {  ArrowCircleRight, ArrowCircleRightOutlined, FacebookRounded, Instagram, KeyboardArrowUp, KeyboardArrowUpRounded, MapsUgcRounded } from '@mui/icons-material'

const ColoredButton=Styled(Button)({
  color:"white"
})

const StyledText=Styled(Typography)({
  display:'inline',
  fontWeight:"bold",
  
  
})
function Footer() {
  const top =() => {
    window.scrollTo(0,0);
  }
  return (<Box >
    <Box className="big">
      <Box className="one">
        <Box className="image" sx={{marginBottom:"-9px"}}><img src={logo} alt='logo'></img></Box>
        <StyledText variant='p'sx={{fontSize:{xs:"34px",sm:"25px"}}}>NovaStore <StyledText variant='p'sx={{color:"#57C9EA"}}>Print</StyledText></StyledText>
      <Box className="text">
        <Typography>You think it.</Typography>
      <Typography>We print it!</Typography>
      </Box>
      
      </Box>
      <Box className="two">
        <Typography variant='subtitle1'>LIENS UTILES</Typography>
        <Box>
          <Box className='list'>
          <Box className="home">
        <ColoredButton className='links' href="/">
        <Typography className='link'>HOME </Typography>
        </ColoredButton>
        </Box>
        <Box className="presentation">
          <ColoredButton className='links'href="/presentation">
          <Typography className='link'>PRESENTATION</Typography>
         </ColoredButton>
        </Box>
        <Box className="services">
        <ColoredButton className='links' href="/services">
        <Typography className='link'>SERVICES</Typography>
        </ColoredButton>
        </Box>
        <Box className="contact">
        <ColoredButton className='links' href="/contacts">
        <Typography className='link'> CONTACT</Typography>
        </ColoredButton>
        </Box>
       </Box>
        </Box>
      </Box>
      <Box className="small">
      <Box>
      <Typography variant='subtitle1'>NOUS CONTACTER</Typography>
      <Typography variant='subtitle2'>+216 33 333 333</Typography>
      <Typography variant='subtitle2'>NovaStore@gmail.com</Typography>
      <Box>
        <IconButton  component="a" href="">
          <FacebookRounded className='icons'/>
        </IconButton>
        <IconButton component="a" href="">
          <Instagram className='icons'/>
        </IconButton>
        <IconButton component="a" href="">
          <MapsUgcRounded className='icons'/>
        </IconButton>
      </Box>
      </Box>
      <Box>
      <Typography variant='subtitle1'>NEWSLETTER</Typography>
      <Typography variant='subtitle2'>Soyer le premier a recevoir</Typography>
      <Typography variant='subtitle2'>nos noveautés</Typography>
      <Box>
      <TextField type='email' label="Email" variant="standard" size="small" sx={{backgroundColor:"#F8F5EC",width:"15vw" }}/>
     <IconButton>
      <ArrowCircleRight sx={{color:"white",paddingTop:"0.1vw"}}/>
     </IconButton>
      </Box>
      </Box>
      </Box>

    </Box>
    <Box sx={{backgroundColor:"#050727",textAlign:"center"}}>
    <IconButton onClick={top}>
      <KeyboardArrowUpRounded  sx={{color:"white",paddingTop:"0.1vw"}}/>
      <Typography sx={{color:"white"}}>BACK TO TOP</Typography>
     </IconButton>
    </Box>
    <Box sx={{textAlign:"center"}}> &copy; 2023 NOVASTORE PRINT . All Rights Reserved.</Box>

        </Box>);
}

export default Footer;
