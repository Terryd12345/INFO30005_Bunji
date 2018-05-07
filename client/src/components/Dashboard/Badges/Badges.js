import React, { Component } from "react";
import ManageSkills from "./ManageSkills/ManageSkills";
import NewEvent from './CreateEvent/NewEvent';

class Badges extends Component {

    render() {
        return (
            <div id="badges">
                <div id="badges-content">
                    <ManageSkills />
                    <NewEvent />
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
