import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import TeamBioCard from "./team-bio-card.component";
import { baseUrl } from "../config";

export default function Team() {

    let [team, setTeam] = useState([]);

    useEffect(() => {
        const loadTeam = async () => {
            let results = await fetch(`${baseUrl}/team`).then(resp => resp.json());
            setTeam(results);
        }

        loadTeam();
    }, [])



    return (
        <Row className="p-3 justify-content-center">
                    {(team.map((member, i) => {
                        return <TeamBioCard key={i} memberData={member}/>
                    }))}
        </Row>
    )
};