import React, { Component } from "react";
import Skill from "../containers/Skill";

class Skills extends Component {
    render() {
        return (
            <div className="wrapper">
                <header className="header">Pick what you want to learn:</header>

                <article className="skills-content">
                    <Skill title="FaceBook" />
                    <Skill title="Twitter" />
                    <Skill title="Instagram" />
                    <Skill title="LinkedIn" />
                    <Skill title="iPad" />
                    <Skill title="iPhone" />
                </article>

                <a href="find-mentor">
                    <button className="button" id="select-skills-btn">Find a Mentor</button>
                </a>
            </div>
        );
    }
}

export default Skills;
