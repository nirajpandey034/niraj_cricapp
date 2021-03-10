import React, { Component } from 'react'

class PopupCard extends Component {


    render() {
        return (
            <div className="popup">
                    <h2>{this.props.details.data.description}</h2> 
            </div>
        )
    }
}

export default PopupCard
