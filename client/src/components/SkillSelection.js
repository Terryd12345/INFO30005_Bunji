import React, { Component } from "react";
import Skill from "../containers/Skill";

class Skills extends Component {
    render() {
        return (
            <div className="wrapper">
                <header className="header">Pick what you want to learn:</header>

                <article className="skills-content">
                    <Skill title="Facebook" picName="facebook" />
                    <Skill title="Twitter" picName="facebook" />
                    <Skill title="Instagram" picName="facebook" />
                    <Skill title="LinkedIn" picName="facebook" />
                    <Skill title="iPad" picName="facebook" />
                    <Skill title="iPhone" picName="facebook" />
                </article>

                <a className="button" id="select-skills-btn" href="find-mentor">
                    Find Mentor
                </a>
            </div>
        );
    }
}

export default Skills;
