import React, { Component } from "react";
import Skill from "../../../GetStarted/Skills/Skill";

class Selected extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            addSkills: true
        };
    }
    
    render() {
        return (
            <div>
                <div id="skills">
                    {
                        this.props.skills.map(skill => {
                            return <Skill key={skill._id} skill={skill}
                                          updateSelectedSkills={this.props.updateSelectedSkills}
                                          isSelected={false} />;
                        })
                    }
                </div>
                
                <div id="modal-button">
                    <a className="button" id="badges-btn">
                        {this.state.addSkills ? "Remove Skills" : "Add to Learned"}
                    </a>
                </div>
            </div>
        )
    };
};

export default Selected;
