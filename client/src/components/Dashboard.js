import React, { Component } from "react";
import Award from '../containers/Award';
import Contact from '../containers/Contact';
import Event from '../containers/Event';
import Skill from '../containers/Skill';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="personal-profile">
                    <div className="personal-pic">
                        <img src={require("../images/user.png")} alt="Profile" />
                        <a href="/dashboard">
                            <button class="button"  id="personal-profile-btn-1">Change Picture</button>
                        </a>
                        <a href="/dashboard">
                            <button className="button" id="personal-profile-btn-2">Edit Info</button>
                        </a>
                    </div>
                    <div className="personal-desc">
                        <h1>Good afternoon, John!</h1>
                    </div>
                </div>
                
                <div className="section" id="awards">
                    <div className="section-title">
                        <h1>Awards</h1>
                    </div>
                    <div className="awards">
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
                </div>
                
                <div className="section" id="contacts">
                    <div className="section-title">
                        <h1>Contacts</h1>
                    </div>
                    <div className="contacts">
                        <Contact />
                        <Contact />
                        <Contact />
                    </div>
                </div>
                
                <div className="section" id="events">
                    <div className="section-title">
                        <h1>Events</h1>
                    </div>
                    <div className="events">
                        <div className="events-sidebar">
                            <h3>Upcoming Events</h3>
                            <h3>This Week</h3>
                            <h3>This Month</h3>
                            <hr />
                            <h3>Past Events</h3>
                        </div>
                        <div className="events-window">
                            <Event />
                            <Event />
                            <Event />
                        </div>
                    </div>
                </div>
                
                <div className="section" id="recommendations">
                    <div className="section-title">
                        <h1>Recommended for You</h1>
                    </div>
                    <div className="recommendations">
                        <Skill title="Facebook" />
                        <Skill title="Instagram" />
                        <Skill title="Mobile Apps" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
