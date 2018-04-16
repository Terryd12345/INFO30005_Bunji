import React, { Component } from "react";

import User from "../containers/User";

class UserSelection extends Component {
    render() {
        return (
            <div className="wrapper">
                <header className="header">We found 3 mentors for you!</header>

                <article className="mentor-content">
                    <User name="John Doe" age="61" gender="Male" location="Melbourne" skills={['Facebook', 'Twitter']} />
                    <User name="John Doe" age="61" gender="Male" location="Melbourne" skills={['Facebook', 'Twitter']} />
                    <User name="John Doe" age="61" gender="Male" location="Melbourne" skills={['Facebook', 'Twitter']} />
                </article>

                <a href="/">
                    <button className="button" id="find-mentor-btn">Confirm</button>
                </a>
            </div>
        );
    }
}

export default UserSelection;
