import React, { Component } from "react";

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="profile">Profile</div>
                <div className="awards">Awards</div>
                <div className="contact">contact</div>
                <div className="events">events</div>
                <div className="recommendations">Recommended</div>
            </div>
        );
    }
}
