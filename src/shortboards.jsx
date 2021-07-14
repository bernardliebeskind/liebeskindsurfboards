import React from "react"
import NavBar from './NavBar'
import Items from './Items'
import Fish from "./Fish.jpeg"
import Groveler from "./Groveler.jpeg"
import HP from "./HP.jpeg"
import MS from "./MS.jpeg"
import SuperSpud from "./SS.jpeg"
import Catfish from "./Catfish.jpeg"

const shortboards = () =>{
    return(
        <div>
            <NavBar />

            <Items 
            
            name1="Fish" 
            description1="A classic stylish design for speed and drive down the line. Usually paired with keel fins. Ideal for 3-6 foot waves."
            board1={Fish}
            board1url = "/fish"

            name2="Groveler" 
            description2="The perfect board for when spring turns to summer, but you can't let go of your shortboard. Best on days 2-5 feet."
            board2={Groveler}
            board2url = "/groveler"

            name3="High Performance" 
            description3="A highly maneuverable speed machine that comes with a 5-fin setup so you don't have to choose. Works best in more hollow waves 3-overhead."
            board3={HP}
            board3url = "/high-performance"
            />
            
            <br/>

            <Items
            
            name1="Catfish" 
            description1="A skatey alternative to the fish that will have you flying through the lineup. Goes well in 2-5 foot waves."
            board1={Catfish}
            board1url = "/catfish"


            name2="Mini Simmons" 
            description2="A high-volume short board that inherited some qualities of a glider, packed into a small package. Great in 1-4 foot waves."
            board2={MS}
            board2url = "/mini-simmons"


            name3="SuperSpud" 
            description3="The SuperSpud is designed to give you all of the high-performance of a shortboard, but in a high-volume option. Ridden on the shorter end. Works on summer days anywhere from 1-5 feet."
            board3={SuperSpud}
            board3url = "/superspud"
            
            />
            
        </div>
    );
};

export default shortboards