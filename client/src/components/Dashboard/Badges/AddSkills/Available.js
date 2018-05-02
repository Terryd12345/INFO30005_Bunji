import React, { Component } from "react";
import Skill from "../../../GetStarted/Skills/Skill";

class Available extends Component {
    render() {
        return (
            <div>
                <div id="skills">
                    {
                        this.props.skills.map(skill => {
                            return <Skill skill={skill.skill} imagePath={skill.imagePath} />;
                        })
                    }
                </div>
                
                <div id="modal-button">
                    <a className="button" id="badges-btn">Select Skills</a>
                </div>
            </div>
        )
    };
};

export default Available;
