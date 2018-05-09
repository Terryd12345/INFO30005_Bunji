import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

class Header extends Component {
    constructor(props, context) {
        super(props, context);

        // this.showRegister = this.showRegister.bind(this);
        // this.showLogin = this.showLogin.bind(this);

        this.state = {
            isLoggedIn: true
        };
    }

    // showRegister = () => {
    //     this.signup.showRegister();
    // }
    //
    // showLogin = () => {
    //     this.signup.showLogin();
    // }
    //

    render() {
        return (
            <div>
                {/*<SignUp ref={signup => this.signup = signup}/>*/}
                
                {/*<NavItem onClick={this.showRegister}>*/}
                    {/*Register*/}
                {/*</NavItem>*/}
                {/*<NavItem onClick={this.showLogin}>*/}
                    {/*Log In*/}
                {/*</NavItem>*/}
                
                {
                    this.state.isLoggedIn ? (
                        <Navbar>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <a id="logo" href="/">
                                        <img src={require("../images/logo.png")} alt="Logo" />
                                    </a>
                                </Navbar.Brand>

                                <Navbar.Toggle />
                            </Navbar.Header>

                            <Navbar.Collapse>
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
                            </Navbar.Collapse>
                        </Navbar>
                    ) : (
                            <Navbar>
                                <Navbar.Header>
                                    <Navbar.Brand>
                                        <a id="logo" href="/">
                                            <img src={require("../images/logo.png")} alt="Logo" />
                                        </a>
                                    </Navbar.Brand>
                                </Navbar.Header>
                            </Navbar>
                        )
                }
            </div>
        );
    }
}

export default Header;
