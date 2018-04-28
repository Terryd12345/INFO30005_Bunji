import React, { Component } from "react";
import Awards from "../Dashboard/Awards/Awards";
import Stats from "../Dashboard/Stats";

class PersonalProfile extends Component {
    render() {
        return (
            <div className="personal-profile">
                <div className="personal-pic">
                    <img src={require("../../images/user.png")} alt="Profile" />
                    <br />
                    <a className="button button-pink" id="personal-btn-1" href="#">
                        Change Picture
                    </a>
                    <br />
                    <a className="button button-pink" id="personal-btn-2" href="#">
                        Edit Info
                    </a>
                </div>
                
                <div className="section-title">
                    <h3>Good afternoon, John!</h3>
                </div>
                
                <Stats />
                <Awards />
            </div>
        );
    }
}

export default PersonalProfile;
