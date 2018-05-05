import React, { Component } from "react";
import Skill from "../../GetStarted/Skills/Skill";

class PersonalSkills extends Component {
    render() {
        return (
            <div id="personal-skills">
                {
                    this.props.allSkills.map(skill => {
                        return <Skill key={skill._id} skill={skill}
                                      updateSelectedSkills={this.props.updateSelectedSkills}
                                      isSelected={false} />;
                    })
                }
            </div>
        );
    }
}

export default PersonalSkills;
