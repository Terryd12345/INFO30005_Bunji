import React, { Component } from "react";
import Stats from "./Stats";
import PersonalSkills from "./PersonalSkills";

class PersonalProfile extends Component {
    render() {
        return (
            <div id="personal-profile">
                <div id="personal-pic">
                    {/*<img src={require(`../../../images/users/${this.props.user.imagePath}.png`)} alt={this.props.user.firstName} />*/}
                    <img src={this.props.user.imagePath} alt={this.props.user.firstName} />
                    <br />
                    <a className="button" id="personal-btn-1" href="">
                        Change Picture
                    </a>
                    <br />
                    <a className="button" id="personal-btn-2" href="">
                        Edit Info
                    </a>
                </div>

                <header className="section-title">
                    <h3>Good afternoon, {this.props.user.firstName}!</h3>
                </header>

                <Stats />
                <PersonalSkills allSkills={this.props.allSkills} updateSelectedSkills={this.props.updateSelectedSkills} />
            </div>
        );
    }
}

export default PersonalProfile;
