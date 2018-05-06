import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Available from "./Available";
import Selected from "./Selected";
import Learned from "./Learned";

class ManageSkills extends Component {
    constructor(props) {
        super(props);
        
        this.closeAll = this.closeAll.bind(this);
        this.showAvailable = this.showAvailable.bind(this);
        this.showSelected = this.showSelected.bind(this);
        this.showLearned = this.showLearned.bind(this);
        this.updateSelectedSkills = this.updateSelectedSkills.bind(this);
        this.getAvailableSkills = this.getAvailableSkills.bind(this);
        
        this.state = {
            show: false,
            available: true,
            selected: false,
            availableSkills: [],
            arrAvailable: [],
            selectedSkills: [],
            arrSelected: [],
            learnedSkills: [],
            arrLearned: []
        };
    }
    
    componentDidMount() {
        var self = this;
    
        axios.get("/api/user")
            .then(function (res) {
                self.setState({ selectedSkills: res.data.skills });
            })
            .catch(function (error) {
                console.log(error);
            });
    
        axios.get("/api/allSkills")
            .then(function (res) {
                self.setState({ availableSkills: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    closeAll() {
        this.setState({ show: false });
    }
    
    showAvailable() {
        this.setState({ availableSkills: this.getAvailableSkills(this.state.availableSkills), show: true, available: true, selected: false });
    }
    
    showSelected() {
        this.setState({ show: true, available: false, selected: true });
    }
    
    showLearned() {
        this.setState({ show: true, available: false, selected: false });
    }
    
    updateSelectedSkills(id, state) {
        if (state === false) {
            this.setState({
                arrAvailable: [...this.state.arrAvailable, id]
            })
        }
        else {
            this.setState(prevState => ({
                arrAvailable: prevState.arrAvailable.filter(skill_id => skill_id !== id)
            }))
        }
    }

    getAvailableSkills(e) {
        let available = e;
        let selected = this.state.selectedSkills;
    
        for(let i=available.length-1; i>=0; i--) {
            for(let j=0; j<selected.length; j++) {
                if(available[i] && (available[i]._id === selected[j]._id)) {
                    available.splice(i, 1);
                }
            }
        }
        return available;
    }
    
    render() {
        const inactiveAvailable = {
            backgroundColor: "#f1f1f1",
            borderTopLeftRadius: "6px"
        }
        
        const inactiveSelected = {
            backgroundColor: "#f1f1f1"
        }
    
        const inactiveLearned = {
            backgroundColor: "#f1f1f1",
            borderTopRightRadius: "6px"
        }
        
        return (
            <div>
                <Modal show={this.state.show} onHide={this.closeAll} animation={true}>
                    <Modal.Header id="badges-header">
                        <Modal.Title className="modal-title-dashboard" id="left-title"
                                     onClick={this.showAvailable}
                                     style={this.state.available ? null : inactiveAvailable}>
                            AVAILABLE
                        </Modal.Title>
                        
                        <Modal.Title className="modal-title-dashboard" id="middle-title"
                                     onClick={this.showSelected}
                                     style={this.state.available ? inactiveSelected : (this.state.selected ? null : inactiveSelected)}>
                            SELECTED
                        </Modal.Title>
                        
                        <Modal.Title className="modal-title-dashboard" id="right-title"
                                     onClick={this.showLearned}
                                     style={this.state.available ? inactiveLearned : (this.state.selected ? inactiveLearned : null)}>
                            LEARNED
                        </Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                        <div id="signup">
                            {
                                this.state.available ? <Available skills={this.state.availableSkills} updateSelectedSkills={this.updateSelectedSkills} />
                                    : (this.state.selected ? <Selected skills={this.state.selectedSkills} updateSelectedSkills={this.updateSelectedSkills} />
                                    : <Learned skills={this.state.learnedSkills} updateSelectedSkills={this.updateSelectedSkills} />)
                            }
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    };
};

export default ManageSkills;
