import React, { Component } from "react";
import Skill from "../../../GetStarted/Skills/Skill";

class Available extends Component {
    render() {
        return (
            <div id="login">
                <form action="/action_page.php">
                    <h1>Available</h1>
                    
                    <hr />
                    <Skill title="Instagram" picName="instagram" />
                    <Skill title="LinkedIn" picName="linkedin" />
                    <Skill title="iPad" picName="apple" />
                    
                    <div className="clearfix">
                        <button type="submit" className="signup">Select Skills</button>
                    </div>
                </form>
            </div>
        )
    };
};

export default Available;
