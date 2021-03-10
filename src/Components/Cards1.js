import React, { Component } from 'react'
import './CardStyle.css'
import PopupCard from './PopupCard'
class Cards1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             unique_id : this.props.details.unique_id,
             showCard : false
        }
    }
    
    cardClickHandler = () =>{
        if(this.state.showCard === false){
            this.setState({
                showCard : true
            })
        }
        else{
            this.setState({
                showCard : false
            })
        }
    }
    render() {
        let date = this.props.details.date;
        let new_date = date.substring(0,10)
        let winning_msg = ""
        if(this.props.details.type === "")
            this.props.details.type = "---------"
        
        if(this.props.details.matchStarted === false){
            winning_msg = "Yet to be decided"
        }
        else if(this.props.details.matchStarted === true && this.props.details.winner_team !== undefined){
            winning_msg = this.props.details.winner_team + " won the match"
        }
        else if(this.props.details.matchStarted === true && this.props.details.winner_team === undefined){
            winning_msg = "Match in Progress"
        }

        return (
            <div>
                <div className="CardClass" onClick={()=>{this.cardClickHandler()}}>
                    <label className="matchType">Match Type: <strong>{this.props.details.type}</strong></label>
                    <label className="matchDate">Match Date: <strong>{new_date}</strong></label><br/>
                    <label className="team1">{this.props.details["team-1"]}</label>
                    <label className="vs">Vs.</label>
                    <label className="team2">{this.props.details["team-2"]}</label><br/>
                    <label className="result">Result of the Game: <strong>{winning_msg}</strong> </label>
                </div>
                {this.state.showCard 
                     ? <PopupCard id={this.state.unique_id}/>
                     : null
                }
            </div>
        )
    }
}

export default Cards1
