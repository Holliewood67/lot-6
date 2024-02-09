import React, { useState, useEffect } from "react";
import { Row, Col, Image, ListGroup, Container, Accordion } from "react-bootstrap";
import { baseUrl } from "../config";


export default function Menu() {
    
    let [beers, setBeers] = useState([]);
    let [seltzers, setSeltzers] = useState([]);
    let [wines, setWines] = useState([]);
    let [nas, setNas] = useState([]);

    useEffect(() => {
        const loadBeers = async () => {
            let results = await fetch(`${baseUrl}/drinks/beers`).then(resp => resp.json());
            setBeers(results);
        }

        loadBeers();
    }, [])

    useEffect(() => {
        const loadSeltzers = async () => {
            let results = await fetch(`${baseUrl}/drinks/seltzers`).then(resp => resp.json());
            setSeltzers(results);
        }

        loadSeltzers();
    }, [])

    useEffect(() => {
        const loadWines = async () => {
            let results = await fetch(`${baseUrl}/drinks/wines`).then(resp => resp.json());
            setWines(results);
        }

        loadWines();
    }, [])

    useEffect(() => {
        const loadNas = async () => {
            let results = await fetch(`${baseUrl}/drinks/nas`).then(resp => resp.json());
            setNas(results);
        }

        loadNas();
    }, [])

        return (
            <> 
                <Row className="p-3">
                    <Accordion className="drinks-accordion">
                        <Accordion.Item  eventKey="0" >
                            <Accordion.Header >
                                BEERS
                            </Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <Container>
                                        <Row className="justify-content-center">
                                        {
                                            beers.map((drink, i) => {
                                                return  <Col lg={6} xl={4}><ListGroup.Item className="bg-black text-white text-center" key={i}>{drink.name}</ListGroup.Item></Col>
                                                        
                                            })
                                        }
                                        </Row>
                                    </Container>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                SELTZERS
                            </Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <Container>
                                        <Row>
                                        {
                                            seltzers.map((drink, i) => {
                                                return  <ListGroup.Item className="bg-black text-white text-center" key={i}>{drink.name}</ListGroup.Item>
                                                        
                                            })
                                        }
                                        </Row>
                                    </Container>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                WINES
                            </Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <Container>
                                        <Row>
                                        {
                                            wines.map((drink, i) => {
                                                return  <ListGroup.Item className="bg-black text-white text-center" key={i}>{drink.name}</ListGroup.Item>
                                                        
                                            })
                                        }
                                        </Row>
                                    </Container>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                NON-ALCOHOLICS
                            </Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    <Container>
                                        <Row>
                                        {
                                            nas.map((drink, i) => {
                                                return  <ListGroup.Item className="bg-black text-white text-center" key={i}>{drink.name}</ListGroup.Item>
                                                        
                                            })
                                        }
                                        </Row>
                                    </Container>
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </>
        )
    }