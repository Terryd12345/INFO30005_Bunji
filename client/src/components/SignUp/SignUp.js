import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
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
        this.setState({ show: false });
    }
    
    showRegister() {
        this.setState({ show: true, register: true })
    }
    
    showLogin = () => {
        this.setState({ show: true, register: false })
    }

    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.closeAll} animation={true}>
            
                    <Modal.Header>
                        <Modal.Title id="register-title">
                            <a onClick={this.showRegister}>Register</a>
                        </Modal.Title>
                        <Modal.Title id="login-title">
                            <a onClick={this.showLogin}>Log In</a>
                        </Modal.Title>
                    </Modal.Header>
            
                    <Modal.Body>
                        <div id="signup">
                            {
                                this.state.register ? <Register /> : <Login />
                            }
                            
                            {/*<hr />*/}
                        </div>
                    </Modal.Body>
            
                    <Modal.Footer>
                        <Button onClick={this.closeAll}>Close</Button>
                    </Modal.Footer>
            
                </Modal>
            </div>
        )
    };
};

export default SignUp;
