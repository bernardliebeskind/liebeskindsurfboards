import React from "react"
import "./App.css"
import NavBar from "./NavBar"
import contactpic from "./contactpic.jpeg"

function contact(props){
    return(
      <div>
      <NavBar />
      
      <img src={contactpic} className="contactpic"/>
        <a style={{display: "block", marginleft: "auto", marginright: "auto"}} id="abouttext" as="a" href = "mailto: bernardliebeskind@gmail.com">Email me at bernardliebeskind@gmail.com or submit a custom order form!</a>
      </div>
    );
};

export default contact