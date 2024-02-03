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

//Other Imports
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Header Images
const eventHeaderPic = require("./img/Pic-4.jpg");
const menuHeaderPic = require("./img/Pic-5.jpg");
const teamHeaderPic = require("./img/Pic-6.jpg")




//Main app JSX
function App() {

  
  return (
    <div className="bg-black">
      <header>
        <Navigation />
      </header>
      <main className=' text-white'>
        <Container fluid >
          <Row className='d-flex'>
              <TopCarousel />
          </Row>
          <Row className='justify-content-md-center mx-auto" my-3 text-center'>
            <Col>
              <h3 className=' mb-5'>Welcome to Lot No. 6, one of Tulsa's favorite art bars located right in the heart of the Pearl District!</h3>
              <h5 className=' mb-5'>More text and description to come later, this is just placeholder text for spacing.</h5>
            </Col>
          </Row>
          <Row id="menu" className="mb-3">
              <Image className='p-0' src={menuHeaderPic} rounded  />    
          </Row>
          <Row>            
            <Menu />
          </Row> 
            <Row id="events" className="my-3">
                    <Image className="p-0" src={eventHeaderPic} />
            </Row>
          <Events/>
            <Row id="events" className="my-3">
                    <Image className="p-0" src={teamHeaderPic} />
            </Row>
          <Team />
          <Row className="my-2 justify-content-md-center">
              <h1 className='text-center'>Contact Us</h1>
          </Row>
          <Row className='my-2'>
            <ContactForm />
          </Row>
        </Container>
      </main>
      <footer className='bg-black text-white'>
        <Container id='about'>
          <Row>
            <Col>Social Media</Col>
            <Col>Location</Col>
            <Col>Hours</Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
