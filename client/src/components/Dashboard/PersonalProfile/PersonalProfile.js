import React, { Component } from "react";
import EditProfile from "./EditProfile";
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
    
    handleShow = () => {
        this.editProfile.handleShow();
    };
    
    render() {
        const greeting = this.getGreeting();
        
        return (
            <div id="personal-profile">
                <div id="personal-pic">
                    <img src={this.props.user.imagePath} alt={this.props.user.firstName} />
                    <br />
                    <EditProfile ref={editProfile => this.editProfile = editProfile} />
                    <a className="button" id="personal-btn-1">
                        Change Picture
                    </a>
                    <br />
                    <a className="button" id="personal-btn-2" onClick={this.handleShow.bind(this)}>
                        Edit Profile
                    </a>
                </div>

                <header className="section-title">
                    <h3>Good {greeting}, {this.props.user.firstName}!</h3>
                </header>

                <Stats skills={this.props.learnedSkills.length}
                       connections={this.props.connections.length}
                       events={this.props.events.length}
                       isMentor={this.props.isMentor} />

                <PersonalSkills allSkills={this.props.allSkills}
                                learnedSkills={this.props.learnedSkills}
                                isMentor={this.props.isMentor} />
            </div>
        );
    }
}

export default PersonalProfile;
