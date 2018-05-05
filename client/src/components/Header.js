import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import SignUp from "./SignUp/SignUp";

class Header extends Component {
    constructor(props, context) {
        super(props, context);

        this.showRegister = this.showRegister.bind(this);
        this.showLogin = this.showLogin.bind(this);

        this.state = {
            loggedIn: true
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
            <Navbar>
                <SignUp ref={signup => this.signup = signup}/>

                <Navbar.Header>
                    <Navbar.Brand>
                        <a id="logo" href="/"><img src={require("../images/logo.jpg")} alt="Logo"/></a>
                    </Navbar.Brand>

                    <Navbar.Toggle/>
                </Navbar.Header>

                <Navbar.Collapse>
                    {
                        this.state.loggedIn ? (
                            <Nav pullRight>
                                <NavItem href="/dashboard">
                                    Dashboard
                                </NavItem>

                                <NavItem href="/connections">
                                    Connections
                                </NavItem>

                                <NavItem href="/auth/logout">
                                    Log Out
                                </NavItem>
                            </Nav>
                        ) : (
                            <Nav pullRight>
                                <NavItem onClick={this.showRegister}>
                                    Register
                                </NavItem>

                                <NavItem onClick={this.showLogin}>
                                    Log In
                                </NavItem>
                            </Nav>
                        )
                    }
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
