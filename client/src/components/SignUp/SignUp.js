import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Register from "./Register";
import Login from "./Login";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.closeAll = this.closeAll.bind(this);
        this.showRegister = this.showRegister.bind(this);
        this.showLogin = this.showLogin.bind(this);

        this.state = {
            show: false,
            register: true
        };
    }

    closeAll() {
        this.setState({
            show: false
        });
    }

    showRegister() {
        this.setState({
            show: true,
            register: true
        })
    }

    showLogin() {
        this.setState({
            show: true,
            register: false
        })
    }

    render() {
        const activeRegister = {
            backgroundColor: "#f1f1f1",
            borderTopLeftRadius: "6px"
        };

        const activeLogin = {
            backgroundColor: "#f1f1f1",
            borderTopRightRadius: "6px"
        };

        return (
            <Modal show={this.state.show} onHide={this.closeAll} animation={true}>
                <Modal.Header>
                    <Modal.Title id="left-title"
                                 onClick={this.showRegister}
                                 style={this.state.register ? null : activeRegister}>
                        Register
                    </Modal.Title>
                    
                    <Modal.Title id="right-title"
                                 onClick={this.showLogin}
                                 style={this.state.register ? activeLogin : null}>
                        Log In
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div id="signup">
                        {
                            this.state.register ? <Register /> : <Login />
                        }
                    </div>
                </Modal.Body>
            </Modal>
        )
    };
}

export default SignUp;
