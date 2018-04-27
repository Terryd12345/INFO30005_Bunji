import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import Keys from "../../keys";
import Register from "./Register";
import Login from "./Login";

class SignUp extends Component {
    constructor(props, context) {
        super(props, context);
        
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
        const responseGoogle = (response) => {
            console.log(response);
        }
        const responseFacebook = (response) => {
            console.log(response);
        }
        
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
                            
                            <hr />
                        
                            <GoogleLogin
                                clientId={Keys.GoogleClientID}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle} >
                                <span id="google">LOGIN WITH G+</span>
                            </GoogleLogin>
                        
                            <br />
                            <br />
                        
                            <FacebookLogin
                                appId={Keys.FacebookID}
                                autoLoad
                                callback={responseFacebook}
                                render={renderProps => (
                                    <button id="facebook" onClick={renderProps.onClick}>This is my custom FB button</button>
                                )}
                            />
                    
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
