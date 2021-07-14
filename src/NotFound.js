import React from "react"
import NavBar from './NavBar'
import LSWebsite from './LSWebsite.png'

const NotFound = () =>{
    return(
        <div>
        <NavBar/>
        <br>
        </br>
        <a href="/" >
        <img id="logo" src={LSWebsite} alt="logo" styles={{
                    height: '660px',
                    border: '40px',
                    margin: '0px 0px 0px 0px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingTop: '60px',
                }}/>
                </a>
                <div id="abouttext">Sorry, the page you are looking for does not exist!</div>
        </div>
    );
};

export default NotFound