import React, { Component } from 'react';
import Award from '../containers/Award';

class Awards extends Component {

    render() {
        return (
            <div className="awards">
                <div className="section-title">
                    <h1>Awards</h1>
                </div>
                <Award title="Welcome!"/>
                <Award title="First Skill"/>
                <Award title="Contact a Mentor"/>
                <Award title="3 Days In"/>
                <Award title="5 Out Of 5"/>
                <Award title="Logged In 10 Days" />
                <Award title="Learn 3 New Skills"/>
                <Award title="Super Learner"/>
                <Award title="Anniversary"/>
            </div>
        );
    }
}

export default Awards;