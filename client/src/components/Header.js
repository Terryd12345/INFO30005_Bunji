import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li id="logo"><a href="/"><img src={require("../images/logo.jpg")} alt="Logo" /></a></li>
                    <li id="dropdown">
                        &#9776;
                        <div id="dropdown-content">
                            <a href="/dashboard">Dashboard</a>
                            <a href="/profile">Profile</a>
                            <a href="/connections">Connections</a>
                            <a href="/">Log Out</a>
                        </div>
                    </li>
                    {/*<li id="account"><img src={require("../images/male.png")} alt="Profile" /></li>*/}
                    <li><a href="/signup">Login</a></li>
                    <li><a href="/signup">Register</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;
