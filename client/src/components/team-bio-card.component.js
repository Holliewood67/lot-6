import React from "react";
import { Card, Row, Col } from "react-bootstrap";


class TeamBioCard extends React.Component {
    render () {
        return (
            <Col md={4} sm={6} className="d-block align-items-center mb-3">
                    <Card className="my-1">
                        <Row fluid={"true"}>
                            <Col >
                                <Card.Img variant="top" src={require('../img/' + this.props.memberData.imgPath)} />
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <Card.Body className="text-center">
                                <Card.Title style={{fontSize: 32, fontWeight: "bold"}}>{this.props.memberData.name}</Card.Title>
                                <Card.Text style={{fontSize: 28, fontWeight: "bold"}}>
                                    {this.props.memberData.bio}
                                </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                    </Col>
        )
    }
}

export default TeamBioCard;