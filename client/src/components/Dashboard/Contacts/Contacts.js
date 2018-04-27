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
                    <a href="/profile"><Contact name="John Doe" /></a>
                    <a href="/profile"><Contact name="Jane Doe" /></a>
                    <a href="/profile"><Contact name="Fred Doe" /></a>
                </div>
            </div>
        );
    }
}

export default Contacts;
