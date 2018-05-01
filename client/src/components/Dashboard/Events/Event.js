import React, { Component } from "react";

class Event extends Component {
    render() {
        return (
            <div>
                <div className="event-panel">
                    <div className="event-pic">
                        <img src={require(`../../../images/${this.props.imagePath}.png`)} alt={this.props.firstName} />
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
                            <h6>{this.props.date}</h6>
                            <h6>{this.props.time}</h6>
                            <h6>{this.props.location}</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;
