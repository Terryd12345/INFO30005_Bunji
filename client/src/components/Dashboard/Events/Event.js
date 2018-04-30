import React, { Component } from "react";

class Event extends Component {
    render() {
        return (
            <div>
                <div className="event-panel">
                    <div className="event-pic">
                        <img src={require("../../../images/user.png")} alt="User" />
                    </div>
                    <div className="event-desc centered">
                        <div className="event-desc-title">
                            <h5>{this.props.title}</h5>
                        </div>
                        
                        <div className="event-desc-detail">
                            <h6>Date:</h6>
                            <h6>Time:</h6>
                            <h6>Location:</h6>
                        </div>
                        
                        <div className="event-desc-content">
                            <h6>1 January 2019</h6>
                            <h6>12 - 2 PM</h6>
                            <h6>Melbourne Central</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;
