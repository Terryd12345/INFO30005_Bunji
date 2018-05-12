import React, { Component } from "react";
import Skill from "../../../GetStarted/Skills/Skill";

class Learned extends Component {
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
                                functionType={3} />;
                        })
                    }
                </div>

                <div id="modal-button">
                    <a onClick={() => this.props.updateSkills(4)} className="button" id="popups-btn">
                        Remove from Learned
                    </a>
                </div>
            </div>
        )
    };
}

export default Learned;
