import React, { Component } from "react";
import ManageSkills from "./ManageSkills/ManageSkills";
import NewEvent from './CreateEvent/NewEvent';
import FindMentor from './FindMentor/FindMentor';

class Badges extends Component {

    render() {
        return (
            <div id="badges">
                <div id="badges-content">
                    <ManageSkills />
                    <NewEvent />
                    <FindMentor />
                </div>
            </div>
        );
    }
}

export default Badges;
