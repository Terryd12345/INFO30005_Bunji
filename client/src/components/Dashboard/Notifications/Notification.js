import React, { Component } from "react";

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="notification-panel">
                    <div className="notification-pic">
                        <img src={require("../../../images/user.png")} alt="Profile" />
                    </div>
                    <div className="notification-desc">
                        <h6>{this.props.title}</h6>
                    </div>
                    <div className="notification-time">
                        <h6>{this.props.time}</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notification;
