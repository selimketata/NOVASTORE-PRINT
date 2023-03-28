import React from "react";
import "./Services.css";
import {Box} from "@mui/material"
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import Card3 from "./components/card3";
import Navbar from"../../components/Navbar"
import Footer from"../../components/Footer"
function Services() {
  return(
    <Box>
    <Navbar></Navbar>
    <Card1></Card1>
    <Card2></Card2>
    <Card3></Card3>
    <Footer></Footer>
    </Box>
      )

}
export default Services
