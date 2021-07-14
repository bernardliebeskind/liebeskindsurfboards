import React from "react"
import "./App.css"
import NavBar from "./NavBar"
import Caro from "./Caro"
import Catfish from "./Catfish.jpeg"
import Catfish2 from "./Catfish2.jpeg"

function CatfishPage(props){
    return(
      <div>
      <NavBar />
      <Caro 
      im1={Catfish} 
      im2={Catfish2}
      name="Catfish"
      description="A skatey alternative to the fish that will have you flying through the lineup. Goes well in 2-5 foot waves."
      />
      
      

      </div>
    );
};

export default CatfishPage