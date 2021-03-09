import React from 'react'
import './CardStyle.css'

function Cards(props) {
    return (
        <div className="CardClass">
            <label className="matchType">Match Type: <strong>{props.details.match_type}</strong></label>
            <label className="matchDate">Match Date: <strong>{props.details.match_date}</strong></label><br/>
            <label className="team1">{props.details.team1}</label>
            <label className="vs">Vs.</label>
            <label className="team2">{props.details.team2}</label><br/>
            <label className="result">Result of the Game: <strong>{props.details.winning_team} Won the Match</strong> </label>
        </div>
    )
}

export default Cards
