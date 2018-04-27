import React, { Component } from "react";
import SignUp from "./SignUp/SignUp";

class Header extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.showRegister = this.showRegister.bind(this);
        this.showLogin = this.showLogin.bind(this);
        
        this.state = {
            loggedIn: false
        };
    }
    
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
    
                {
                    this.state.loggedIn ? (
                        <ul>
                            <li id="dropdown">
                                &#9776;
                                <div id="dropdown-content">
                                    <a href="/dashboard">Dashboard</a>
                                    <a href="/connections">Connections</a>
                                    <a href="/">Log Out</a>
                                </div>
                            </li>
                            <li><a href="/">Log Out</a></li>
                            <li><a href="/connections">Connections</a></li>
                            <li><a href="/dashboard">Dashboard</a></li>
                        </ul>
                    ) : (
                        <ul>
                            <li id="logo"><a href="/"><img src={require("../images/logo.jpg")} alt="Logo" /></a></li>
                            <li><a onClick={this.showLogin}>Log In</a></li>
                            <li> < a onClick = {this.showRegister}>Register</a></li>
                        </ul>
                    )
                }
            </div>
        );
    }
}

export default Header;
