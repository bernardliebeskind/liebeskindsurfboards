import React from "react"
import NavBar from './NavBar'
import Items2 from './Items2'
import HPL from "./HPL.jpeg"
import NR from "./NR.jpeg"


const longboards = () =>{
    return(
        <div>
            <NavBar />

            <Items2
            
            name1="Nose Rider" 
            description1= "A classic design for making the most of crowded summer days at First Point. Works in waves anywhere from 1-3 feet."
            board1={NR}

            name2="High Performance" 
            description2="For when there's not much going on in the water, but you still want the manueverability of a mid-length and glide of a longboard under your feet. Best on days 1-4 feet."
            board2={HPL}
            
            
            />
            
            <br/>

            
        </div>
    );
};

export default longboards