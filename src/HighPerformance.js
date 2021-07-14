import React from "react"
import "./App.css"
import NavBar from "./NavBar"
import Caro from "./Caro"
import BoardPage from "./BoardPage"
import HP from "./HP.jpeg"
import HP2 from "./HP2.jpeg"

function HighPerformance(props){
    return(
      <div>
      <NavBar />
      <Caro 
      im1={HP} 
      im2={HP2}
      name="HP"
      description="A highly maneuverable speed machine that comes with a 5-fin setup so you don't have to choose. Works best in more hollow waves 3-overhead."
      />
      
      

      </div>
    );
};

export default HighPerformance