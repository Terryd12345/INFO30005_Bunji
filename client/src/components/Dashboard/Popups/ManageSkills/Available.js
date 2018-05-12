import React, { Component } from "react";
import Skill from "../../../GetStarted/Skills/Skill";

class Available extends Component {
    render() {
        return (
            <div>
                <div id="skills">
                    {
                        this.props.skills.map(skill => {
                            return <Skill
                                key={skill._id}
                                skill={skill}
                                isSelected={false}
                                updateSelected={this.props.updateSelected}
                                functionType={1} />;
                        })
                    }
                </div>

                <div id="modal-button">
                    <a onClick={() => this.props.updateSkills(1)} className="button" id="popups-btn">
                        Select Skills
                    </a>
                </div>
            </div>
        )
    };
}

export default Available;
