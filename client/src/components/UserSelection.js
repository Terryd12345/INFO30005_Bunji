import React, { Component } from "react";

import User from "../containers/User";

class UserSelection extends Component {
    render() {
        return (
            <div className="wrapper">
                <header className="header">We found 3 mentors for you!</header>

                <article className="user-selection">
                    <User name="John Doe" age="21" gender="Male" location="Melbourne" skills={['Facebook', 'Twitter']} />
                    <User name="Jane Doe" age="19" gender="Female" location="Adelaide" skills={['Instagram', 'iPhone']} />
                    <User name="Fred Doe" age="24" gender="Male" location="Gold Coast" skills={['MacBook', 'Computers']} />
                </article>

                <a href="/dashboard">
                    <button className="button" id="user-selection-btn">Confirm</button>
                </a>
            </div>
        );
    }
}

export default UserSelection;
