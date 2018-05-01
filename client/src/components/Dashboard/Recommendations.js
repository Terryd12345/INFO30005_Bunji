import React, { Component } from "react";
import Skill from "../GetStarted/Skills/Skill";

class Recommendations extends Component {
    render() {
        return (
            <div className="section" id="recommendations">
                <header className="section-title">
                    <h3>Recommended for You</h3>
                </header>
                
                <div className="centered" id="recommendations-nav-left">
                    <span><img src={require("../../images/icons/arrow-left.png")} alt="Icon" /></span>
                </div>
                
                <div id="recommendations-content">
                    {
                        this.props.skills.map(skill => {
                            return <Skill skill={skill.skill} imagePath={skill.imagePath} />;
                        })
                    }
                </div>
                
                <div className="centered" id="recommendations-nav-right">
                    <span><img src={require("../../images/icons/arrow-right.png")} alt="Icon" /></span>
                </div>
                
                <div className="section-button">
                    <a className="button" id="recommendations-btn" href="">
                        Add to Selected Skills
                    </a>
                </div>
            </div>
        );
    }
}

export default Recommendations;
