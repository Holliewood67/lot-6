import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

export default function Footer() {

    return(
        <Row className='text-center py-3'>
            <Col>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100046276813991">
                    <Image src={require('../Icons/facebook.png')} />
                </a>
            </Col>
            <Col>
                <a target="_blank" href="https://www.instagram.com/lotno.6/?hl=en">
                    <Image src={require('../Icons/instagram.png')} />
                </a>
            </Col>
        </Row>
    )
}