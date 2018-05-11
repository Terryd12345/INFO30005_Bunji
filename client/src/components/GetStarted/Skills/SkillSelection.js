import React, { Component } from "react";
import Skill from "./Skill";

class SkillSelection extends Component {
    render() {
        return (
            <div className="wrapper">
                {
                    this.props.isMentor ? (
                        <header className="header">
                            <h2>Pick what you want to teach!</h2>
                            <h5>You can select as many skills as you want, and we will pair you up with someone who wants to learn the skills you have.</h5>
                        </header>
                    ) : (
                        <header className="header">
                            <h2>Pick what you want to learn!</h2>
                            <h5>You can select as many skills as you want, and we will find mentors who have all or most of the skills you want to learn.</h5>
                        </header>
                    )
                }

                <div className="skills-content">
                    {
                        this.props.allSkills.map(skill => {
                            return <Skill key={skill._id}
                                          skill={skill}
                                          isSelected={this.props.selectedSkills.indexOf(skill._id) > -1}
                                          updateSelected={this.props.updateSelected}
                                          functionType={1} />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default SkillSelection;
