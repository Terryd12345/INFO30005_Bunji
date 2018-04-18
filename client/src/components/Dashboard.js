import React, { Component } from "react";
import Notifications from '../containers/Notifications';
import Awards from '../containers/Awards';
import Contacts from '../containers/Contacts';
import Events from '../containers/Events';
import Recommendations from '../containers/Recommendations';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="personal-profile">
                    <div className="personal-pic">
                        <img src={require("../images/user.png")} alt="Profile" />
                        <a className="button"  id="personal-btn-1" href="/dashboard">
                            Change Picture
                        </a>
                        <a className="button"  id="personal-btn-2" href="/dashboard">
                            Edit Info
                        </a>
                    </div>
                    <div className="section-title">
                        <h1>Good afternoon, John!</h1>
                    </div>
                    <Notifications />
                </div>

                <div className="section" id="awards">
                    <div className="section-title">
                        <h1>Awards</h1>
                    </div>
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
                    <a className="button" id="recommendations-btn" href="find-mentor">
                        Find Mentor
                    </a>
                </div>
            </div>
        );
    }
}

export default Dashboard;
