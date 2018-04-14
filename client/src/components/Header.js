import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li id="logo"><a href="/">Bunji</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/find-mentor">Find Mentor</a></li>
                    <li><a href="/select-skills">Select Skills</a></li>
                </ul>
            </div>
        );
    }
}
