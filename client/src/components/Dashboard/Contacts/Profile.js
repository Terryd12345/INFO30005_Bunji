import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

class Profile extends Component {
    constructor(props) {
        super(props);
        
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        
        this.state = {
            show: false
        };
    }
    
    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true })
    }
    
    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                    <div className="profile-panel">
                        <div className="profile-button">
                            <a href="/connections">
                                <a className="button button-pink" id="profile-btn">Contact John</a>
                            </a>
                        </div>

                        <div className="profile-pic">
                            <img src={require("../../../images/user.png")} alt="Profile" />
                        </div>

                        <div className="profile-bio">
                            <h3>John Doe</h3>
                            <h4>21 / Male / Melbourne</h4>
                            <h6>Skills: Facebook, Twitter</h6>
                        </div>

                        <div className="profile-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
    
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Profile;
