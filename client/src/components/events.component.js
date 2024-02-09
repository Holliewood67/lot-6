import React from "react";
import { Row, Col } from "react-bootstrap";
import { baseUrl } from "../config";

import EventCard from "./event-card.component";
import { useEffect, useState } from "react";

export default function Events() {

    let [events, setEvents] = useState([]);

    useEffect(() => {
        const loadEvents = async () => {
            let results = await fetch(`${baseUrl}/events`).then(resp => resp.json());
            setEvents(results);
        }

        loadEvents();
    }, [])


        return (
            <Row className="p-3 justify-content-center">
                        {(events.map((event, i) => {
                            return <EventCard key={i} eventData={event}
                                        eventImage="https://picsum.photos/id/420/300/200" />
                        }))}
            </Row>
        )
}

