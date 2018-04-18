import React, { Component } from "react";
import Skill from "../containers/Skill";

class Skills extends Component {
    render() {
        return (
            <div className="wrapper">
                <header className="header">Pick what you want to learn:</header>

                <article className="skills-content">
                    <Skill title="Facebook" />
                    <Skill title="Twitter" />
                    <Skill title="Instagram" />
                    <Skill title="LinkedIn" />
                    <Skill title="iPad" />
                    <Skill title="iPhone" />
                </article>

                <a className="button" id="select-skills-btn" href="find-mentor">
                    Find Mentor
                </a>
            </div>
        );
    }
}

export default Skills;
