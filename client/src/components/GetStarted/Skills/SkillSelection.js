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
                    {
                        this.props.skills.map(skill => {
                            return <Skill skill={skill.skill} imagePath={skill.imagePath} />;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default SkillSelection;
