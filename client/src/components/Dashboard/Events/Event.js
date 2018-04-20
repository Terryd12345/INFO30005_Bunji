import React, { Component } from 'react';

class Event extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="event-panel">
                    <div className="event-pic">
                        <img src={require("../../../images/male.png")} alt="Profile" />
                    </div>
                    <div className="event-desc">
                        <h3>{this.props.title}</h3>
                        <h5>Date: 1 January 2019</h5>
                        <h5>Time: 12 - 2 PM</h5>
                        <h5>Location: Melbourne Central</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;
