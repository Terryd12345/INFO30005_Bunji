import React, { Component } from "react";

class Notification extends Component {
    render() {
        return (
            <div>
                <div className="notification-panel">
                    <div className="notification-pic">
                        <img src={require("../../../images/user.png")} alt="User" />
                    </div>
                    <div className="notification-desc">
                        {this.props.title}
                    </div>
                    <div className="notification-time">
                        {this.props.time}
                    </div>
                </div>
            </div>
        );
    }
}

export default Notification;
