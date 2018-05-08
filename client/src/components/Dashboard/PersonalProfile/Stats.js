import React, { Component } from "react";

class Stats extends Component {
    render() {
        return (
            <div id="stats">
                <div className="stat centered" id="stat-1">
                    <h3>{this.props.skills}</h3>
                    <h5>Skills Learned</h5>
                </div>
                
                <div className="stat centered" id="stat-2">
                    <h3>{this.props.connections}</h3>
                    <h5>Mentors Met</h5>
                </div>
                
                <div className="stat centered" id="stat-3">
                    <h3>12</h3>
                    <h5>Hours Spent</h5>
                </div>
            </div>
        );
    }
}

export default Stats;
