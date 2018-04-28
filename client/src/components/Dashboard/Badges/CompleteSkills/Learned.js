import React, { Component } from "react";
import Skill from "../../../GetStarted/Skills/Skill";

class Learned extends Component {
    render() {
        return (
            <div id="login">
                <form action="/action_page.php">
                    <h1>Learned</h1>
        
                    <hr />
                    <Skill title="iPhone" picName="apple" />
        
                    <div className="clearfix">
                        <button type="submit" className="signup">Remove from Learned</button>
                    </div>
                </form>
            </div>
        )
    };
};

export default Learned;
