import React, { Component } from "react";

export default class User extends Component {
    render() {
        return (
            <div className="mentor-panel">
                <div className="mentor-pic">
                    <img src="images/user.png" alt="Profile" />
                </div>
                <div className="mentor-desc">
                    <h1>John Doe</h1>
                    <h3>21 / Male / Melbourne</h3>
                    <h5>Skills: Facebook, Twitter</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        );
    }
}
