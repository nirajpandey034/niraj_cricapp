import React, { Component } from 'react'
import Cards from "./Cards"

class MainDisplay extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

            details :{
                match_type : "One-Day",
                match_date: "09-03-2021",
                team1: "MI",
                team2: "CSK",
                winning_team: "MI",
        }

        }
    }
    

    // detailBtnHandler = () =>{

    // }
    render() {
        return (
            <div>
                {/* <button onClick={this.detailBtnHandler}>Get Details</button> */}
                <Cards details={this.state.details}/>
                
            </div>
        )
    }
}

export default MainDisplay
