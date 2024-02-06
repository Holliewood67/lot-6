import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

class ContactForm extends React.Component {
    render () {
        return (
            <Row className='px-3'>
                <Form>
                    <Row>
                        <Col sm={6}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Your Email" />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                        <Form.Group className="mb-3" controlId="subject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="Message">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>                
    </Row>
        )
    }
}

export default ContactForm;