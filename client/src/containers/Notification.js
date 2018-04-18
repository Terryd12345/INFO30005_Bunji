import React, { Component } from 'react';

class Notification extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="notification-panel">
                    <div className="notification-pic">
                        <img src={require("../images/male.png")} alt="Profile" />
                    </div>
                    <div className="notification-desc">
                        <h5>{this.props.title}</h5>
                    </div>
                    <div className="notification-time">
                        <h5>{this.props.time}</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notification;
