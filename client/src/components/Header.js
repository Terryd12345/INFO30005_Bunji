import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li id="logo"><a href="/">Bunji</a></li>
                    <li><a id="menu" href="/"><img src={require("../images/user.png")} alt="Profile" /></a></li>
                    <li><a href="/relationships">Relationships</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/find-mentor">Find Mentor</a></li>
                    <li><a href="/select-skills">Select Skills</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;
