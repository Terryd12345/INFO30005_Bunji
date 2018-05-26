import React, { Component } from "react";
import Skill from "../../../GetStarted/Skills/Skill";

class Selected extends Component {
    render() {
        return (
            <div>
                <div id="skills">
                    {
                        this.props.skills.map(skill => {
                            return <Skill key={skill._id}
                                skill={skill}
                                isSelected={false}
                                updateSelected={this.props.updateSelected}
                                functionType={2} />;
                        })
                    }
                </div>

                <div id="modal-button">
                    <a onClick={this.props.handleClose} className="button" id="popups-cancel-btn">
                        Cancel
                    </a>
                    <a onClick={() => this.props.updateSkills(2)} className="button" id="popups-btn">
                        Unselect
                    </a>
                    <a onClick={() => this.props.updateSkills(3)} className="button" id="popups-btn">
                        {
                            this.props.isMentor ? "Teach" : "Learn"
                        }
                    </a>
                </div>
            </div>
        )
    };
}

export default Selected;
