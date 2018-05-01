import React, { Component } from "react";
import Profile from "./Profile";

class Contact extends Component {
    handleShow = () => {
        this.profile.handleShow();
    }

    render() {
        return (
            <div>
                <div className="contact-panel">
                    <div className="contact-pic centered">
                        <img src={require(`../../../images/${this.props.imagePath}.png`)} alt={this.props.firstName} />
                    </div>
                    <div className="contact-desc centered">
                        {this.props.firstName} {this.props.lastName}
                
                        <Profile ref={profile => this.profile = profile} />
                        <h6>
                            <a onClick={this.handleShow} className="button" id="contact-btn-1">
                                Profile
                            </a>
                            
                            <span className="contact-br"><br /></span>
                            
                            <a href="/connections" className="button" id="contact-btn-2">
                                Connection
                            </a>
                        </h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
