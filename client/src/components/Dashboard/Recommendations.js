import React, { Component } from "react";
import Skill from "../Skills/Skill";

class Recommendations extends Component {

    render() {
        return (
            <div className="recommendations">
                <Skill title="Facebook" picName="facebook" />
                <Skill title="Twitter" picName="twitter" />
                <Skill title="Instagram" picName="instagram" />
                <Skill title="LinkedIn" picName="linkedin" />
                <Skill title="iPad" picName="apple" />
            </div>
        );
    }
}

export default Recommendations;
