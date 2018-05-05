import React, { Component } from "react";
import ManageSkills from "./ManageSkills/ManageSkills";

class Badges extends Component {
    showAvailable = () => {
        this.manageSkills.showAvailable();
    }
    
    render() {
        return (
            <div id="badges">
                <ManageSkills ref={manageSkills => this.manageSkills = manageSkills} />
                
                <div id="badges-content">
                    <div onClick={this.showAvailable.bind(this)} className="badge centered" id="badge-1">
                        <h5>
                            <img src={require("../../../images/icons/add.png")} alt="Icon" />
                            Manage Skills
                        </h5>
                    </div>
    
                    <a href="">
                        <div className="badge centered" id="badge-2">
                            <h5>
                                <img src={require("../../../images/icons/create.png")} alt="Icon" />
                                Create an Event
                            </h5>
                        </div>
                    </a>
                    
                    <a href="">
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
