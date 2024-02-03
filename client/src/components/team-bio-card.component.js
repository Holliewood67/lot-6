import React from "react";
import { Card, Row, Col } from "react-bootstrap";

class TeamBioCard extends React.Component {
    render () {
        return (
            <Col md={4} sm={6} className="d-block align-items-center mb-3">
                    <Card className="my-1">
                        <Row fluid={"true"}>
                            <Col >
                                <Card.Img variant="top" src={this.props.bioImage} />
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <Card.Body className="text-center">
                                <Card.Title>Name</Card.Title>
                                <small className="text-muted">Title</small>
                                <Card.Text>
                                    This will include a short bio about the team member. This bio should consist of 4 - 5 sentances in total. That was the second sentance being used as an example. Now this is the third sentance taking up space to make sure sure that things will look right later on.
                                </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                        <Row>
                            <Card.Footer>
                                <small className="text-muted">Favorite Quote:</small>
                            </Card.Footer>
                        </Row>
                    </Card>
                    </Col>
        )
    }
}

export default TeamBioCard;