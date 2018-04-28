import React, { Component } from "react";
import Profile from "../../MainPages/Profile";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    handleShow = () => {
        this.profile.handleShow();
    }

    render() {
        return (
            <div>
                <div className="contact-panel">
                    <div className="contact-pic">
                        <img src={require("../../../images/user.png")} alt="Profile" />
                    </div>
                    <div className="contact-desc centered">
                        <h5>{this.props.name}</h5>
                
                        <Profile ref={profile => this.profile = profile} />
                        <a onClick={this.handleShow} className="button" id="contact-btn-1">
                            Profile
                        </a>
                
                        <a href="/connections" className="button" id="contact-btn-2">
                            Connection
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
