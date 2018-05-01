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
                
                <div id="badges-content">
                    <div onClick={this.showAvailable.bind(this)} className="badge centered" id="badge-1">
                        <h5>
                            <img src={require("../../../images/icons/add.png")} alt="Icon" />
                            Add Skills
                        </h5>
                    </div>
            
                    <div onClick={this.showSelected.bind(this)} className="badge centered" id="badge-2">
                        <h5>
                            <img src={require("../../../images/icons/complete.png")} alt="Icon" />
                            Complete Skills
                        </h5>
                    </div>
                    
                    <a href="/find-mentor">
                        <div className="badge centered" id="badge-3">
                            <h5>
                                <img src={require("../../../images/icons/find.png")} alt="Icon" />
                                Find Mentor
                            </h5>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Badges;
