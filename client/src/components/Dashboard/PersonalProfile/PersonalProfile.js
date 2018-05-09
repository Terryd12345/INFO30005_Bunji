import React, { Component } from "react";
import PersonalSkills from "./PersonalSkills";
import Stats from "./Stats";

class PersonalProfile extends Component {
    getGreeting = () => {
        let today = new Date();
        let hour = today.getHours();
        
        if (hour < 12) {
            return "morning";
        } else if (hour < 18) {
            return "afternoon";
        } else {
            return "evening";
        }
    };
    
    render() {
        const greeting = this.getGreeting();
        
        return (
            <div id="personal-profile">
                <div id="personal-pic">
                    <img src={this.props.user.imagePath} alt={this.props.user.firstName} />
                    <br />
                    <a className="button" id="personal-btn-1" href="">
                        Edit Info
                    </a>
                </div>

                <header className="section-title">
                    <h3>Good {greeting}, {this.props.user.firstName}!</h3>
                </header>

                <Stats skills={this.props.learnedSkills.length}
                       connections={this.props.connections.length}
                       events={this.props.events.length} />

                <PersonalSkills learnedSkills={this.props.learnedSkills} />
            </div>
        );
    }
}

export default PersonalProfile;
