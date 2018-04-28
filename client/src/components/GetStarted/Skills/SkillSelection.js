import React, { Component } from "react";
import Skill from "./Skill";

class SkillSelection extends Component {
    render() {
        return (
            <div className="wrapper">
                <header className="header">
                    <h2>Pick what you want to learn!</h2>
                    <h5>You can select as many skills as you want, and we will pair you up with someone who has all or most of the skills you want.</h5>
                </header>

                <div className="skills-content">
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
            </div>
        );
    }
}

export default SkillSelection;
