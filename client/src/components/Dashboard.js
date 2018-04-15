import React, { Component } from "react";

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="profile">Profile</div>
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
