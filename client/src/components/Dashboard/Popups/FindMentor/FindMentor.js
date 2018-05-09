import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios/index";
import User from "../../../GetStarted/Users/User"

class FindMentor extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.filterSkills = this.filterSkills.bind(this);
        this.updateSelected = this.updateSelected.bind(this);

        this.state = {
            show: false,
            allUsers: [],
            selectedUsers: []
        };
    }
    
    componentDidMount() {
        const self = this;
    
        axios.get("/api/user")
            .then(function (res1) {
                axios.post("/api/mentorBySkills", {
                    skills: self.filterSkills(res1.data.skills, res1.data.learnedSkills)
                })
                .then(function (res2) {
                    console.log(res2);
                    // self.setState({
                    //     allUsers: res2.data
                    // });
                })
                .catch(function (error) {
                    console.log(error);
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    /* ============================================================================================================= */

    handleClose() {
        this.setState({
            show: false
        });
    }

    handleShow() {
        this.setState({
            show: true
        })
    }
    
    handleSubmit() {
        const self = this;
        
        // axios.get("/api/addConnections", {
        //     connections: self.state.selectedUsers
        // })
        // .then(function () {
        //     self.componentDidMount();
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    }
    
    filterSkills(keep, remove) {
        for (let i = keep.length - 1; i >= 0; i--) {
            for (let j = 0; j < remove.length; j++) {
                if (keep[i]._id === remove[j]._id) {
                    keep = [
                        ...keep.slice(0, i),
                        ...keep.slice(i + 1)
                    ];
                    break;
                }
            }
        }
        return keep;
    }
    
    /* type               : (0) users - default
     * id                 : user's id
     * previouslySelected : (true) to be removed from array, (false) to be added to array
     */
    updateSelected(type, id, previouslySelected) {
        switch(type) {
            case 0:
                if (!previouslySelected) {
                    this.setState({
                        selectedUsers: [...this.state.selectedUsers, id]
                    })
                }
                else {
                    this.setState(prevState => ({
                        selectedUsers: prevState.selectedUsers.filter(skill_id => skill_id !== id)
                    }))
                }
                break;
            
            default:
                break;
        }
    }
    
    /* ============================================================================================================= */

    render() {

        return (
            <div>
                <div onClick={this.handleShow} className="popup centered" id="popup-3">
                    <h5>
                        <img src={require("../../../../images/icons/find.png")} alt="Icon" />
                        Find Mentor
                    </h5>
                </div>
                
                <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                    <Modal.Body>
                        {
                            this.state.allUsers.map(user => {
                                return <User key={user._id}
                                             user={user}
                                             isSelected={false}
                                             updateSelected={this.props.updateSelected}
                                             functionType={0} />;
                            })
                        }
                        
                        <a onClick={this.handleSubmit} className="button" id="user-selection-btn">
                            Confirm
                        </a>
                    </Modal.Body>
                </Modal>
            </div>
        )
    };
}

export default FindMentor;
