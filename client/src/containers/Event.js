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
                        <img src={require("../images/user.png")} alt="Profile" />
                    </div>
                    <div className="event-desc">
                        <h3>{this.props.title}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;
