import React, { Component } from 'react'
import Cards1 from "./Cards1"
import axios from 'axios'

class MainDisplay extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

            key:"rfAWkyD04URIOIitqOAtxhTqQn43",
            data:null
        }
    }
    
    detailBtnHandler = () =>{
            axios.post('https://cricapi.com/api/matches/',{
            apikey : this.state.key
            })
            // .then(res=>res.json())
            .then(
                (result) =>{
                    let Results = result.data.matches.map((results,index) =>
                     <Cards1 key={index} details={results}/>)
                    this.setState({
                        data:Results
                    })
                }
            )
            .catch((error)=>{
                console.log(error)
            })
    }
    render() {
        return (
            <div>
                <button className="detailButton" onClick={this.detailBtnHandler}>Get Details of Cricket Matches Around the Globe</button>
                {/* <Cards details={this.state.details}/> */}
                {this.state.data}
            </div>
        )
    }
}

export default MainDisplay
