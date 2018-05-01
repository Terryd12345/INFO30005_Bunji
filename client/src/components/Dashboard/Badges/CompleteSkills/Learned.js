import React, { Component } from "react";
import Skill from "../../../GetStarted/Skills/Skill";

class Learned extends Component {
    render() {
        return (
            <div>
                <div id="skills">
                    <Skill title="Facebook" picName="facebook" />
                    <Skill title="Twitter" picName="twitter" />
                    <Skill title="Instagram" picName="instagram" />
                    <Skill title="LinkedIn" picName="linkedin" />
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
                    <a className="button" id="badges-btn">Remove from Learned</a>
                </div>
            </div>
        )
    };
};

export default Learned;
