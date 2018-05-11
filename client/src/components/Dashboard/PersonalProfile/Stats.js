import React, { Component } from "react";

class Stats extends Component {
    render() {
        return (
            <div id="stats">
                <div className="stat centered" id="stat-1">
                    <h3>{this.props.skills}</h3>
                    <h5>{(this.props.skills > 1) ? "Skills" : "Skill"} {this.props.isMentor ? "Taught" : "Learnt"}</h5>
                </div>
                
                <div className="stat centered" id="stat-2">
                    <h3>{this.props.connections}</h3>
                    {
                        this.props.isMentor ? (
                            <h5>
                                {(this.props.connections > 1) ? "Mentees" : "Mentee"} Met
                            </h5>
                        ) : (
                            <h5>
                                {(this.props.connections > 1) ? "Mentors" : "Mentor"} Met
                            </h5>
                        )
                    }
                </div>
                
                <div className="stat centered" id="stat-3">
                    <h3>{this.props.events}</h3>
                    <h5>{(this.props.events > 1) ? "Events" : "Event"} Created</h5>
                </div>
            </div>
        );
    }
}

export default Stats;
