import React, { Component } from 'react';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="contact-panel">
                    <div className="contact-pic">
                        <img src={require("../../../images/male.png")} alt="Profile" />
                    </div>
                    <div className="contact-desc">
                        <h3>{this.props.name}</h3>
                        <a className="button" id="contact-btn" href="/profile">Profile</a>
                        <a class="button" id="contact-btn-2" href="/relationships">Relationship</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
