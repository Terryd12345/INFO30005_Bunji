import React, { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Skill from "../../GetStarted/Skills/Skill";

class PersonalSkills extends Component {
    getDate = (datetime) => {
        let formattedDate = new Date(datetime);
        return formattedDate.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric" });
    };
    
    render() {
        return (
            <div id="personal-skills">
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip className="tooltip" id="tooltip">
                            <strong>Join Bunji</strong>
                            <br/>
                            Unlocked {this.getDate(this.props.joinDate)}
                        </Tooltip>
                    }>
                    <div>
                        <div className="centered" id="empty-badge">
                            <img src={require("../../../images/logo.png")} alt="Bunji" />
                        </div>
                    </div>
                </OverlayTrigger>

                {
                    this.props.learnedSkills.map(skill => {
                        return <OverlayTrigger
                                    key={skill._id}
                                    placement="top"
                                    overlay={
                                        <Tooltip className="tooltip" id="tooltip">
                                            <strong>{this.props.isMentor ? "Teach" : "Learn"} {skill.skill.skill}</strong>
                                            <br/>
                                            Unlocked {this.getDate(skill.date)}
                                        </Tooltip>
                                    }>
                            <div>
                                <Skill
                                    skill={skill.skill}
                                    isSelected={false}
                                    functionType={-1} />
                            </div>
                        </OverlayTrigger>;
                    })
                }
            </div>
        );
    }
}

export default PersonalSkills;
