import React, { Component } from "react";
import AddSkills from "./AddSkills/AddSkills";
import CompleteSkills from "./CompleteSkills/CompleteSkills";

class Badges extends Component {
    showAvailable = () => {
        this.addSkills.showAvailable();
    }
    
    showSelected = () => {
        this.completeSkills.showSelected();
    }
    
    render() {
        return (
            <div id="badges">
                <AddSkills ref={addSkills => this.addSkills = addSkills} />
                <CompleteSkills ref={completeSkills => this.completeSkills = completeSkills} />
                
                <div className="badges">
                    <div onClick={this.showAvailable.bind(this)} className="badge centered" id="badge-1">
                        <h3>Add Skills</h3>
                    </div>
            
                    <div onClick={this.showSelected.bind(this)} className="badge centered" id="badge-2">
                        <h3>Complete Skills</h3>
                    </div>
                    
                    <a href="/find-mentor">
                        <div className="badge centered" id="badge-3">
                            <h3>Find Mentor</h3>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Badges;
