import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LSWebsite from './LSWebsite.png'



function NavBar() {
    return (
        <header>  
        <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"><img class="center" src={LSWebsite} style={{height:'40px'}}alt="Liebeskind Surfboards"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '600px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/customs">Customs</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/softgoods">Soft Goods</Nav.Link>
                        <NavDropdown title="Surfboards" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/longboards">Longboards</NavDropdown.Item>
        <NavDropdown.Item href="/shortboards">Shortboards</NavDropdown.Item>
      </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>


    )
}

export default NavBar