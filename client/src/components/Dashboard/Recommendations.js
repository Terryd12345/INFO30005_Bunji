import React, { Component } from "react";
import Skill from "../Skills/Skill";

class Recommendations extends Component {

    render() {
        return (
            <div className="recommendations">
                <Skill title="Facebook" picName="facebook" />
                <Skill title="Instagram" picName="instagram" />
                <Skill title="Mobile Apps" picName="apple" />
            </div>
        );
    }
}

export default Recommendations;
