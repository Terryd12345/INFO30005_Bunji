import React, { Component } from "react";

class Stats extends Component {

    render() {
        return (
            <div className="stats">
                <div className="stat centered">
                    <h3>5</h3>
                    <h4>Skills Learned</h4>
                </div>
                <div className="stat centered">
                    <h3>3</h3>
                    <h4>Mentors Met</h4>
                </div>
                <div className="stat centered">
                    <h3>124</h3>
                    <h4>Hours Spent</h4>
                </div>
            </div>
        );
    }
}

export default Stats;
