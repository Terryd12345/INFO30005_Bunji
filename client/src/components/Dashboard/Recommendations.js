import React, { Component } from "react";
import Skill from "../GetStarted/Skills/Skill";

class Recommendations extends Component {

    render() {
        return (
            <div className="section" id="recommendations">
                <div className="section-title">
                    <h3>Recommended for You</h3>
                </div>
                
                <div className="recommendations">
                    <Skill title="Facebook" picName="facebook" />
                    <Skill title="Twitter" picName="twitter" />
                    <Skill title="Instagram" picName="instagram" />
                    <Skill title="LinkedIn" picName="linkedin" />
                    <Skill title="iPad" picName="apple" />
                </div>
    
                <a className="button" id="recommendations-btn" href="#">
                    Add to Selected Skills
                </a>
            </div>
        );
    }
}

export default Recommendations;
