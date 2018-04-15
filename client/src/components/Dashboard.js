import React, { Component } from "react";

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="personal_profile">Profile</div>
                <div className="awards">
                    <div className="award"></div>
                    <div className="award"></div>
                    <div className="award"></div>
                    <div className="award"></div>
                    <div className="award"></div>
                    <div className="award"></div>
                    <div className="award"></div>
                    <div className="award"></div>
                    <div className="award"></div>
                </div>
                <div className="contact">Contact</div>
                <div className="events">Events</div>
                <div className="recommendations">
                    <div className="recommendation"></div>
                    <div className="recommendation"></div>
                    <div className="recommendation"></div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
