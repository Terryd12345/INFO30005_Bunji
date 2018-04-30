import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
    render() {
        return (
            <div className="section" id="contacts">
                <header className="section-title">
                    <h3>Contacts</h3>
                </header>
                
                <div id="contacts-content">
                    <Contact name="John Doe" />
                    <Contact name="Jane Doe" />
                    <Contact name="Fred Doe" />
                </div>
            </div>
        );
    }
}

export default Contacts;
