import React, { Component } from "react";
import Skill from "../../../GetStarted/Skills/Skill";

class Selected extends Component {
    render() {
        return (
            <div id="login">
                <form action="/action_page.php">
                    <h1>Selected</h1>
        
                    <hr />
                    <Skill title="Facebook" picName="facebook" />
                    <Skill title="Twitter" picName="twitter" />
        
                    <div className="clearfix">
                        <button type="submit" className="signup">Remove Skills</button>
                    </div>
                </form>
            </div>
        )
    };
};

export default Selected;
