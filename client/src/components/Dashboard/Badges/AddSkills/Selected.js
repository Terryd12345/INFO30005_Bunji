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
                    <Skill title="iPad" picName="apple" />
                    <Skill title="iPhone" picName="apple" />
                    <Skill title="Facebook" picName="facebook" />
                    <Skill title="Twitter" picName="twitter" />
                    <Skill title="Instagram" picName="instagram" />
                    <Skill title="LinkedIn" picName="linkedin" />
                    <Skill title="iPad" picName="apple" />
                    <Skill title="iPhone" picName="apple" />
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
