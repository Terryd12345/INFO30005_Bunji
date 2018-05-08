import React, { Component } from "react";
import ManageSkills from "./ManageSkills/ManageSkills";
import CreateEvent from './CreateEvent/CreateEvent';
import FindMentor from './FindMentor/FindMentor';

class Popups extends Component {

    render() {
        return (
            <div id="popups">
                <div id="popups-content">
                    <ManageSkills />
                    <CreateEvent />
                    <FindMentor />
                </div>
            </div>
        );
    }
}

export default Popups;
