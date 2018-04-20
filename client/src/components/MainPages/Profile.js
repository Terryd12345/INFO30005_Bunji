import React, { Component } from "react";

class Profile extends Component {
    render() {
        return (
            <div className="wrapper" id="profile">
                <article className="profile">
                    <div className="profile-panel">
                        <div className="profile-button">
                            <a href="/connections">
                                <button className="button" id="profile-btn">Contact John</button>
                            </a>
                        </div>

                        <div className="profile-pic">
                            <img src={require("../../images/male.png")} alt="Profile" />
                        </div>

                        <div className="profile-bio">
                            <h1>John Doe</h1>
                            <h3>21 / Male / Melbourne</h3>
                            <h5>Skills: Facebook, Twitter</h5>
                        </div>

                        <div className="profile-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default Profile;
