import  {React } from 'react'
import {Box,Typography,List, ListItemButton, ListItemText, ListItem}from"@mui/material"
import Styled from"@emotion/styled"
import "./footer.css"
import logo from "../assets/logo.png"



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
      <Box>
        <div><img src={logo} alt='logo'></img></div>
        <StyledText variant='p'sx={{fontSize:{xs:"34px",sm:"25px"}}}>NovaStore <StyledText variant='p'sx={{color:"#57C9EA"}}>Print</StyledText></StyledText>
      <Typography>You think it </Typography>
      <Typography>We print it!</Typography>
      </Box>
      <Box>
        <Typography variant='subtitle1'>LIENS UTILES</Typography>
        <Box>
          <List>
          <ListItem disablePadding>
        <ListItemButton component="a" href="/">
        <ListItemText primary="HOME" />
        </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton component="a" href="/presentation">
        <ListItemText primary="PRESENTATION" />
        </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton component="a" href="/services">
        <ListItemText primary="SERVICES" />
        </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton component="a" href="/contacts">
        <ListItemText primary="CONTACT" />
        </ListItemButton>
        </ListItem>
        </List>
        </Box>
      </Box>
      <Box></Box>
      <Box></Box>

    </Box>
    <Box> &copy; 2023 NOVASTORE PRINT . All Rights Reserved.</Box>

        </Box>);
}

export default Footer;
