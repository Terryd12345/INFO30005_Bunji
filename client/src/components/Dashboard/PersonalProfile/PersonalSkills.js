import React, { Component } from "react";
import Skill from "../../GetStarted/Skills/Skill";

class PersonalSkills extends Component {
    render() {
        return (
            <div id="personal-skills">
                <div className="centered" id="empty-badge">
                    <img src={require("../../../images/logo.png")} alt="Bunji" />
                </div>
                
                {
                    this.props.isMentor ? (
                        this.props.allSkills.map(skill => {
                            return <Skill key={skill._id}
                                          skill={skill}
                                          isSelected={false}
                                          functionType={-1} />;
                        })
                    ) : (
                        this.props.learnedSkills.map(skill => {
                            return <Skill key={skill._id}
                                          skill={skill}
                                          isSelected={false}
                                          functionType={-1} />;
                        })
                    )
                }
            </div>
        );
    }
}

export default PersonalSkills;
