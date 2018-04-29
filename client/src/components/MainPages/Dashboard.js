import React, { Component } from "react";
import PersonalProfile from "../Dashboard/PersonalProfile";
import Badges from "../Dashboard/Badges/Badges";
import Notifications from "../Dashboard/Notifications/Notifications";
import Contacts from "../Dashboard/Contacts/Contacts";
import Events from "../Dashboard/Events/Events";
import Recommendations from "../Dashboard/Recommendations";

class Dashboard extends Component {
    render() {
        return (
            <div id="page-wrap">
                <div id="dashboard">
                    <PersonalProfile />
                    <Badges />
                    <Notifications />
                    <Contacts />
                    <Events />
                    <Recommendations />
                </div>
            </div>
        );
    }
}

export default Dashboard;
