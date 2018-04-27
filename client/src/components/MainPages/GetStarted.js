import React, { Component } from "react";
import SkillSelection from "../GetStarted/Skills/SkillSelection";
import UserSelection from "../GetStarted/Users/UserSelection";

class GetStarted extends Component {
    render() {
        return (
            <div className="get-started">
                <div id="section-1">
                    <div className="section-header">
                        <h1>
                            1. Select Skills
                            <span><img src={require(`../../images/tick.png`)} alt="Completed" /></span>
                        </h1>
                    </div>
                    
                    <SkillSelection />
                </div>
                
                <div id="section-2">
                    <div className="section-header disabled">
                        <h1>2. Find Mentor</h1>
                    </div>
                    
                    <UserSelection />
                </div>
                
                <div id="section-3">
                    <div className="section-header disabled">
                        <h1>3. Learn Skills</h1>
                    </div>
    
                    <div className="wrapper" id="get-started">
                        <header className="header">
                            <h1>All good!</h1>
                            <h5>Once a mentor confirms your request, you can start learning your skills.</h5>
                        </header>
    
                        <a className="button" id="get-started-btn" href="/dashboard">
                            View Dashboard
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default GetStarted;
