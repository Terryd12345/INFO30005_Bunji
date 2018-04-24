import React, { Component } from "react";
import Notification from "./Notification";

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="notifications">
                <Notification title="John sent you a message." time="Just Now" />
                <Notification title="Jane sent you a message." time="1hr ago" />
                <Notification title="Fred sent you a message." time="2d ago" />
            </div>
        );
    }
}

export default Events;
