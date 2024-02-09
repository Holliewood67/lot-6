//BSReact Imports
import { 
  Container, 
  Row, 
  Col,
  Image 
       } 
from 'react-bootstrap';

//CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Component Imports
import Navigation from './components/navigation.component';
import TopCarousel from './components/top-carousel.component';
import Menu from './components/menu.component';
import Events from './components/events.component';
import Team from './components/team.component';
import ContactForm from './components/contact-form.component';
import Footer from './components/footer.component';

//Other Imports
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Header Images
const eventHeaderPic = require("./img/Pic-4.jpg");
const menuHeaderPic = require("./img/Pic-5.jpg");
const teamHeaderPic = require("./img/Pic-6.jpg")
const contactHeaderPic = require("./img/Pic-7.jpg")




//Main app JSX
function App() {

  
  return (
    <Container fluid className="bg-black text-white">
        <Navigation />
              <TopCarousel />
          <Row className='border-top mx-auto my-3 text-center'>
            <Col>
              <h3 className='py-3'>Welcome to Lot No. 6, one of Tulsa's favorite art bars located right in the heart of the Pearl District!</h3>
              <h5 className='pt-3'>More text and description to come later, this is just placeholder text for spacing.</h5>
            </Col>
          </Row>
          <Row id="menu" className="py-1 border-top border-bottom">
              <Image className='p-0' src={menuHeaderPic}  />    
          </Row>
          <Row>            
            <Menu />
          </Row> 
            <Row id="events" className="py-1 border-top border-bottom">
                    <Image className="p-0" src={eventHeaderPic} />
            </Row>
          <Events/>
            <Row id="team" className="py-1 border-top border-bottom">
              <Image className="px-0" src={teamHeaderPic} />
            </Row>
          <Team />
          <Row id="contact" className="py-1 justify-content-md-center border-top border-bottom">
            <Image className="px-0" src={contactHeaderPic} />
          </Row>
          <Row className='py-3'>
            <ContactForm />
          </Row>
          <Row className='border-top text-center py-3'>
            <h1>Find us on Facebook & Instagram!</h1>
          </Row>
          <Footer />
    </Container>
  );
}

export default App;
