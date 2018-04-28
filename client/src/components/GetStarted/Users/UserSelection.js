import React, { Component } from "react";
import User from "./User";

class UserSelection extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            fromDashboard: false
        };
    }
    
    render() {
        return (
            <div className="wrapper">
                <header className="header">
                    <h2>We found 3 mentors for you!</h2>
                    <h6>You can select up to 3 mentors, and the first one to confirm your request will be paired up with you.</h6>
                </header>

                <article className="user-selection">
                    <User name="John Doe" age="21" gender="Male" location="Melbourne" skills={["Facebook", "Twitter"]} />
                    <User name="Jane Doe" age="19" gender="Female" location="Adelaide" skills={["Instagram", "iPhone"]} />
                    <User name="Fred Doe" age="24" gender="Male" location="Gold Coast" skills={["MacBook", "Computer"]} />
                </article>
                
                {
                    this.state.fromDashboard ? (
                        <a className="button" id="user-selection-btn" href="/dashboard">
                            Confirm
                        </a>
                    ) : (null)
                }
            </div>
        );
    }
}

export default UserSelection;
