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
                    {this.props.user} wants to connect.
                </div>

                <div className="notification-res">
                    <a id="accept">
                        <img src={require("../../../images/icons/accept.png")} alt="Icon" />
                    </a>
                    <a id="decline">
                        <img src={require("../../../images/icons/decline.png")} alt="Icon" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Notification;
