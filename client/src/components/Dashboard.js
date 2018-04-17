import React, { Component } from "react";
import Award from '../containers/Award';
import Contacts from '../containers/Contacts';
import Event from '../containers/Event';
import Skill from '../containers/Skill';
import Events from '../containers/Events';
import Awards from './Awards';
import Recommendations from '../containers/Recommendations';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="personal-profile">
                    <div className="personal-pic">
                        <img src={require("../images/user.png")} alt="Profile" />
                        <a href="/dashboard">
                            <button className="button"  id="personal-profile-btn-1">Change Picture</button>
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
                    <Awards />
                </div>

                <div className="section" id="contacts">
                    <Contacts />
                </div>

                <div className="section" id="events">
                    <div className="section-title">
                        <h1>Events</h1>
                    </div>
                    <Events />
                </div>

                <div className="section" id="recommendations">
                    <div className="section-title">
                        <h1>Recommended for You</h1>
                    </div>
                    <Recommendations />
                </div>
            </div>
        );
    }
}

export default Dashboard;
