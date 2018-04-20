import React, { Component } from 'react';

class Stats extends Component {

    render() {
        return (
            <div className="stats">
                <div className="stat centered">
                    <h1>5</h1>
                    <h3>Skills Learned</h3>
                </div>
                <div className="stat centered">
                    <h1>3</h1>
                    <h3>Mentors Met</h3>
                </div>
                <div className="stat centered">
                    <h1>124</h1>
                    <h3>Hours Spent</h3>
                </div>
            </div>
        );
    }
}

export default Stats;
