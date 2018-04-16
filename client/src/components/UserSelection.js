import React, { Component } from "react";

import User from "../containers/User";

class UserSelection extends Component {
    render() {
        return (
            <div className="wrapper">
                <header className="header">We found 3 mentors for you!</header>

                <article className="user-selection">
                    <User name="John Doe" age="61" gender="Male" location="Melbourne" skills={['Facebook', 'Twitter']} />
                    <User name="John Doe" age="61" gender="Male" location="Melbourne" skills={['Facebook', 'Twitter']} />
                    <User name="John Doe" age="61" gender="Male" location="Melbourne" skills={['Facebook', 'Twitter']} />
                </article>

                <a href="/dashboard">
                    <button className="button" id="user-selection-btn">Confirm</button>
                </a>
            </div>
        );
    }
}

export default UserSelection;
