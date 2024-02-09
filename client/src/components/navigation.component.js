import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
const logo = require('../img/Lot 6 Logo WHITE.png')

class Navigation extends React.Component {
    render () {
        return (
            <Navbar expand="lg" bg="black" variant="dark">
                    <Navbar.Brand href="#home">
                        <Image src={logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-center">
                        <Nav.Link href="#menu"><h3>Menu</h3></Nav.Link>
                        <Nav.Link href="#events"><h3>Events</h3></Nav.Link>
                        <Nav.Link href="#team"><h3>Our Team</h3></Nav.Link>
                        <Nav.Link href="#contact"><h3>Contact</h3></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;