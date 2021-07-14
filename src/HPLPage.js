import React from "react"
import "./App.css"
import NavBar from "./NavBar"
import Caro from "./Caro"
import HPL from "./HPL.jpeg"
import HPL2 from "./HPL2.jpeg"

function HPLPage(props){
    return(
      <div>
      <NavBar />
      <Caro
      im1={HPL} 
      im2={HPL2}
      name="High Performance Longboard"
      description="For when there's not much going on in the water, but you still want the manueverability of a mid-length and glide of a longboard under your feet. Best on days 1-4 feet."
      />
      
      

      </div>
    );
};

export default HPLPage