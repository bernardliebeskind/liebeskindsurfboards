import React from 'react'
import LSWebsite from './LSWebsite.png'
import background from "./pv.jpeg"

function Body() {
    return (
    <body >
        <div id="backgroundpicture" style={{ backgroundImage: `url(${background})` }}>
	        <a href="/">
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
                <center id="abouttext">
                Founded in 2020, Liebeskind Surfboards is an small-scale surfboard manufacturer run from 
                my backyard in sunny Los Angeles, California. The entire board-building process, from shaping 
                to sanding, is done by me, Bernard Liebeskind. If you can dream of it, I'll make it. Please contact 
                me for customs.
            </center>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div> 
    </body>
    )
}


export default Body