import React from "react";
import { Card, Row, Col } from "react-bootstrap";

class EventCard extends React.Component {
    render () {
        return (
            <Col md={4} sm={6} className="d-inline-flex mb-3">
                    <Card>
                        <Row>
                            <Col >
                                <Card.Img variant="top" src={this.props.eventImage} />
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <Card.Body className="d-block">
                                <Card.Title style={{fontSize: 32, fontWeight: "bold"}}>{this.props.eventData.name}</Card.Title>
                                <Card.Text style={{fontSize: 24}}>Date and Time</Card.Text>
                                <Card.Text style={{fontSize: 28, fontWeight: "bold"}}>
                                    {this.props.eventData.description}
                                </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                    </Col>

        )
    }
}

export default EventCard;