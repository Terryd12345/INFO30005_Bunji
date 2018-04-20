import React, { Component } from "react";
import Skill from "./Skill";

class Skills extends Component {
    render() {
        return (
            <div className="wrapper">
                <header className="header">Pick what you want to learn:</header>

                <article className="skills-content">
                    <Skill title="Facebook" picName="facebook" />
                    <Skill title="Twitter" picName="twitter" />
                    <Skill title="Instagram" picName="instagram" />
                    <Skill title="LinkedIn" picName="linkedin" />
                    <Skill title="iPad" picName="apple" />
                    <Skill title="iPhone" picName="apple" />
                </article>

                <a className="button" id="select-skills-btn" href="find-mentor">
                    Find Mentor
                </a>
            </div>
        );
    }
}

export default Skills;
