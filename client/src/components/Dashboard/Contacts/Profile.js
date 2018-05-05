import React, { Component } from "react";
import { Modal } from "react-bootstrap";

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
                    <div id="profile-panel">
                        <div id="profile-button">
                            <a href="/connections">
                                <a className="button" id="profile-btn">Contact John</a>
                            </a>
                        </div>

                        <div id="profile-pic">
                            <img src={require("../../../images/users/user.png")} alt="User" />
                        </div>

                        <div id="profile-bio">
                            <h3>John Doe</h3>
                            <h4>21 / Male / Melbourne</h4>
                            <h6>Skills: Facebook, Twitter</h6>
                        </div>

                        <div id="profile-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Profile;
