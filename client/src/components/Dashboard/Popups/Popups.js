import React, { Component } from "react";
import ManageSkills from "./ManageSkills/ManageSkills";
import CreateEvent from './CreateEvent/CreateEvent';
import FindMentor from './FindMentor/FindMentor';

class Popups extends Component {

    render() {
        return (
            <div id="popups">
                <div id="popups-content">
                    <ManageSkills
                        isMentor={this.props.isMentor}
                        reload={this.props.reload} />
                    <CreateEvent reload={this.props.reload} />
                    {
                        this.props.isMentor ? (
                            <a href="https://www.facebook.com/groups/1638684616248563/" target="_blank" rel="noopener noreferrer">
                                <div className="popup centered" id="popup-3">
                                    <h6>
                                        <img src={require("../../../images/icons/community.png")} alt="Icon" />
                                        Join the Community
                                    </h6>
                                </div>
                            </a>
                        ) : (
                                <FindMentor reload={this.props.reload} />
                            )
                    }
                </div>
            </div>
        );
    }
}

export default Popups;
