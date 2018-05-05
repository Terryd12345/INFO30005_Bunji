import React, { Component } from "react";
import Stats from "./Stats";
import PersonalSkills from "./PersonalSkills";

class PersonalProfile extends Component {
    constructor(props) {
        super(props);
        
        this.getGreeting = this.getGreeting.bind(this);
    }
    
    getGreeting() {
        var today = new Date();
        var hour = today.getHours();
        
        if (hour < 12) {
            return "morning";
        } else if (hour < 18) {
            return "afternoon";
        } else {
            return "evening";
        }
    }
    
    render() {
        const greeting = this.getGreeting();
        
        return (
            <div id="personal-profile">
                <div id="personal-pic">
                    {/*<img src={require(`../../../images/users/${this.props.user.imagePath}.png`)} alt={this.props.user.firstName} />*/}
                    <img src={this.props.user.imagePath} alt={this.props.user.firstName} />
                    <br />
                    <a className="button" id="personal-btn-1" href="">
                        Edit Info
                    </a>
                    <br />
                    <a className="button" id="personal-btn-2" href="">
                        Some Button
                    </a>
                </div>

                <header className="section-title">
                    <h3>Good {greeting}, {this.props.user.firstName}!</h3>
                </header>

                <Stats />
                <PersonalSkills allSkills={this.props.allSkills} updateSelectedSkills={this.props.updateSelectedSkills} />
            </div>
        );
    }
}

export default PersonalProfile;
