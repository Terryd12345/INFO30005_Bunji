import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="section" id="contacts">
                <div className="section-title">
                    <h1>Contacts</h1>
                </div>
                
                <div className="contacts">
                    <Contact name="John Doe" />
                    <Contact name="Jane Doe" />
                    <Contact name="Fred Doe" />
                </div>
            </div>
        );
    }
}

export default Contacts;
