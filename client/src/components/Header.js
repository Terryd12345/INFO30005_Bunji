import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li id="logo"><a href="/"><img src={require("../images/logo.jpg")} alt="Profile" /></a></li>
                    <li id="dropdown">
                        &#9776;
                        <div id="dropdown-content">
                            <a href="/signup">Login</a>
                            <a href="/select-skills">Select Skills</a>
                            <a href="/find-mentor">Find Mentor</a>
                            <a href="/dashboard">Dashboard</a>
                            <a href="/profile">Profile</a>
                            <a href="/connections">Connections</a>
                        </div>
                    </li>
                    {/*<li id="account"><img src={require("../images/male.png")} alt="Profile" /></li>*/}
                    {/*<li><a href="/connections">Connections</a></li>*/}
                    {/*<li><a href="/profile">Profile</a></li>*/}
                    {/*<li><a href="/dashboard">Dashboard</a></li>*/}
                    {/*<li><a href="/find-mentor">Find Mentor</a></li>*/}
                    {/*<li><a href="/select-skills">Select Skills</a></li>*/}
                    {/*<li><a href="/signup">Login</a></li>*/}
                    <li><a>Login</a></li>
                    <li><a>Register</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;
