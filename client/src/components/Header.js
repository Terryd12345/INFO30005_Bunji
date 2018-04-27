import React, { Component } from "react";
import SignUp from "./SignUp/SignUp";

class Header extends Component {
    showRegister = () => {
        this.signup.showRegister();
    }
    
    showLogin = () => {
        this.signup.showLogin();
    }
    
    render() {
        return (
            <div className="navbar">
                <SignUp ref={signup => this.signup = signup} />
                
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
                    <li><a onClick={this.showLogin.bind(this)}>Log In</a></li>
                    <li><a onClick={this.showRegister.bind(this)}>Register</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;
