import React, { Component } from "react";
import Skill from "./Skill";

class SkillSelection extends Component {
    render() {
        return (
            <div className="wrapper" id="get-started">
                <header className="header">
                    <h1>Pick what you want to learn!</h1>
                    <h5>You can select as many skills as you want, and we will pair you up with someone who has all or most of the skills you want.</h5>
                </header>

                <article className="skills-content">
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
                </article>

                <a className="button" id="skill-selection-btn" href="#section-2">
                    Find Mentor
                </a>
            </div>
        );
    }
}

export default SkillSelection;
