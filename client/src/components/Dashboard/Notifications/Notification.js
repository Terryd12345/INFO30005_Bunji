import React, { Component } from "react";

class Notification extends Component {
    render() {
        return (
            <div className="notification-panel">
                <div className="notification-pic">
                    <img
                        src={this.props.imagePath}
                        alt={this.props.firstName} />
                </div>

                <div className="notification-desc">
                    {this.props.notification}
                </div>

                <div className="notification-time">
                    {this.props.time}
                </div>
            </div>
        );
    }
}

export default Notification;
