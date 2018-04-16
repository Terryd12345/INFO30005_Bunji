import React, { Component } from "react";
import Award from './Award';
import Skill from '../containers/Skill';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="personal_profile">Profile</div>
                <div className="awards">
                    <Award title="Welcome!"/>
                    <Award title="5 days in"/>
                    <Award title="First Skill"/>
                    <Award title="Contact a mentor"/>
                    <Award title="Learn 3 new skills"/>
                    <Award title="Logged in 10 days" />
                    <Award title="Super learner"/>
                </div>
                <div className="contact">Contact</div>
                <div className="events">Events</div>
                <div className="recommendations">
                    <Skill title="Facebook" />
                    <Skill title="Mobile Apps" />
                    <Skill title="Instagram" />
                </div>
            </div>
        );
    }
}

export default Dashboard;
