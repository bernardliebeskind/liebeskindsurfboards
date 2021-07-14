import React from "react"
import "./App.css"
import NavBar from "./NavBar"
import Caro from "./Caro"
import fish from "./Fish.jpeg"
import fish2 from "./Fish2.jpeg"

function Fish(props){
    return(
      <div>
      <NavBar />
      <Caro 
      im1={fish} 
      im2={fish2}
      name="Fish"
      description="A classic stylish design for speed and drive down the line. Usually paired with keel fins. Ideal for 3-6 foot waves."
      />
      
      

      </div>
    );
};

export default Fish