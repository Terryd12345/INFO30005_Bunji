import React, { Component } from "react";
import Skill from "../../GetStarted/Skills/Skill";

class PersonalSkills extends Component {
    render() {
        return (
            <div id="personal-skills">
                {
                    this.props.learnedSkills.map(skill => {
                        return <Skill key={skill._id} skill={skill}
                                      updateSelectedSkills={this.props.updateSelectedSkills}
                                      isSelected={false}
                                      inDashboard={true} />;
                    })
                }
            </div>
        );
    }
}

export default PersonalSkills;
