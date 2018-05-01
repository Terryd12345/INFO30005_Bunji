import React, { Component } from "react";
import Notification from "./Notification";

class Notifications extends Component {
    render() {
        return (
            <div className="section" id="notifications">
                <header className="section-title">
                    <h3>Notifications</h3>
                </header>
                
                <div id="notifications-content">
                    {
                        this.props.notifications.map(notification => {
                            return <Notification notification={notification.notification} time={notification.time} imagePath={notification.imagePath} />;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Notifications;
