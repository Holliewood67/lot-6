import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
const logo = require('../img/Lot 6 Logo WHITE.png')

class Navigation extends React.Component {
    render () {
        return (
            <Navbar expand="lg" bg="black" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src={logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#menu">Menu</Nav.Link>
                        <Nav.Link href="#events">Events</Nav.Link>
                        <Nav.Link href="#team">Meet the Team</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation;