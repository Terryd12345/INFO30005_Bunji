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
            <div className="dashboard">
                <PersonalProfile />
                <Badges />
                <Notifications />
                <Contacts />
                <Events />
                <Recommendations />
            </div>
        );
    }
}

export default Dashboard;
