import React, { Component } from "react";
import ManageSkills from "./ManageSkills/ManageSkills";
import CreateEvent from './CreateEvent/CreateEvent';
import FindMentor from './FindMentor/FindMentor';

class Popups extends Component {

    render() {
        return (
            <div id="popups">
                <div id="popups-content">
                    <ManageSkills isMentor={this.props.isMentor} />
                    <CreateEvent />
                    {
                        this.props.isMentor ? (
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <div className="popup centered" id="popup-3">
                                    <h5>
                                        <img src={require("../../../images/icons/community.png")} alt="Icon" />
                                        Join the Community
                                    </h5>
                                </div>
                            </a>
                        ) : (
                            <FindMentor />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Popups;
