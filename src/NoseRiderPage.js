import React from "react"
import "./App.css"
import NavBar from "./NavBar"
import Caro from "./Caro"
import NoseRider from "./NR.jpeg"
import NoseRider2 from "./NR2.jpeg"

function NoseRiderPage(props){
    return(
      <div>
      <NavBar />
      <Caro 
      im1={NoseRider} 
      im2={NoseRider2}
      name="Nose Rider"
      description="A classic design for making the most of crowded summer days at First Point. Works in waves anywhere from 1-3 feet."
      />
      
      

      </div>
    );
};

export default NoseRiderPage