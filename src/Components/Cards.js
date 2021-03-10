import React from 'react'
import './CardStyle.css'
import PopupCard from './PopupCard'

function Cards(props) {
    let date = props.details.date;
    let new_date = date.substring(0,10)
    let winning_msg = ""
    let match_id = props.details.unique_id
    if(props.details.type === "")
        props.details.type = "---------"
    
    if(props.details.matchStarted === false){
        winning_msg = "Yet to be decided"
    }
    else if(props.details.matchStarted === true && props.details.winner_team !== undefined){
        winning_msg = props.details.winner_team + " won the match"
    }
    else if(props.details.matchStarted === true && props.details.winner_team === undefined){
        winning_msg = "Match in Progress"
    }
    
    function cardClickHandler(){
        
    }
    return (
        <div>
        <div className="CardClass" onClick={()=>{cardClickHandler()}}>
            <label className="matchType">Match Type: <strong>{props.details.type}</strong></label>
            <label className="matchDate">Match Date: <strong>{new_date}</strong></label><br/>
            <label className="team1">{props.details["team-1"]}</label>
            <label className="vs">Vs.</label>
            <label className="team2">{props.details["team-2"]}</label><br/>
            <label className="result">Result of the Game: <strong>{winning_msg}</strong> </label>
        </div>

        </div>
    )
}

export default Cards
