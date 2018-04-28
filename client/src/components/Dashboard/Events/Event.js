import React, { Component } from "react";

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="event-panel">
                    <div className="event-pic">
                        <img src={require("../../../images/user.png")} alt="Profile" />
                    </div>
                    <div className="event-desc centered">
                        <h4>{this.props.title}</h4>
                        <h6>Date: 1 January 2019</h6>
                        <h6>Time: 12 - 2 PM</h6>
                        <h6>Location: Melbourne Central</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;
