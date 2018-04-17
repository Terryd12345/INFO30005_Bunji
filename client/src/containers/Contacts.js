import React, { Component } from 'react';
import Contact from '../containers/Contact';

class Contacts extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="section-title">
                    <h1>Contacts</h1>
                </div>
                <div className="contacts">
                    <a href="/profile"><Contact name="John Doe" /></a>
                    <a href="/profile"><Contact name="Jane Doe" /></a>
                    <a href="/profile"><Contact name="Johnathon Doe" /></a>
                </div>
            </div>
        );
    }
}

export default Contacts;
