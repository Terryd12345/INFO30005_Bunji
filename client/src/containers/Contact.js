import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact-panel">
                    <div className="contact-pic">
                        <img src={require("../images/user.png")} alt="Profile" />
                    </div>
                    <div className="contact-desc">
                        <h3>John Doe</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
