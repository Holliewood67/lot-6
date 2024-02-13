import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import fbLogo from '../Icons/facebook.png';
import igLogo from '../Icons/instagram.png';

export default function Footer() {

    return(
        <Row className='text-center py-3'>
            <Col>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100046276813991">
                    <Image src={fbLogo} />
                </a>
            </Col>
            <Col>
                <a target="_blank" href="https://www.instagram.com/lotno.6/?hl=en">
                    <Image src={igLogo} />
                </a>
            </Col>
        </Row>
    )
}