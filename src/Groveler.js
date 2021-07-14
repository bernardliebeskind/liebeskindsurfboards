import React from "react"
import "./App.css"
import NavBar from "./NavBar"
import Caro from "./Caro"
import BoardPage from "./BoardPage"
import groveler from "./Groveler.jpeg"
import groveler2 from "./groveler2.jpeg"

function Groveler(props){
    return(
      <div>
      <NavBar />
      <Caro 
      im1={groveler} 
      im2={groveler2}
      name="Groveler"
      description="The perfect board for when spring turns to summer, but you can't let go of your shortboard. Best on days 2-5 feet."
      />
      
      

      </div>
    );
};

export default Groveler