import React, { Component } from "react";

class Event extends Component {
    getDate = () => {
        let datetime = new Date(this.props.datetime);
        return datetime.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" });
    };
    
    getTime = () => {
        let datetime = new Date(this.props.datetime);
        return datetime.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
    };
    
    render() {
        const date = this.getDate();
        const time = this.getTime();
        
        return (
            <div className="event-panel">
                <div className="event-pic">
                    <img src={this.props.imagePath}
                         alt={this.props.firstName} />
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
                        <h6>{date}</h6>
                        <h6>{time}</h6>
                        <h6>{this.props.location}</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;
