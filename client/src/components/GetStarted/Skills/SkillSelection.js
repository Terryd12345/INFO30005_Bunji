import React, { Component } from "react";
import Skill from "./Skill";

class SkillSelection extends Component {
    render() {
        return (
            <div className="wrapper" id="get-started">
                <header className="header">
                    <h2>Pick what you want to learn!</h2>
                    <h6>You can select as many skills as you want, and we will pair you up with someone who has all or most of the skills you want.</h6>
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
            </div>
        );
    }
}

export default SkillSelection;