import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Available from "./Available";
import Selected from "./Selected";
import Learned from "./Learned";

class ManageSkills extends Component {
    constructor(props) {
        super(props);
        
        this.updateSelectedSkills = this.updateSelectedSkills.bind(this);
        this.closeAll = this.closeAll.bind(this);
        this.showAvailable = this.showAvailable.bind(this);
        this.showSelected = this.showSelected.bind(this);
        
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
    
        axios.get("/api/allSkills")
        .then(function (res) {
            self.setState({ availableSkills: res.data, selectedSkills: res.data, learnedSkills: res.data });
        })
        .catch(function (error) {
            console.log(error);
        });
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
    
    closeAll() {
        this.setState({ show: false });
    }
    
    showAvailable() {
        this.setState({ show: true, available: true, selected: false })
    }
    
    showSelected = () => {
        this.setState({ show: true, available: false, selected: true })
    }
    
    showLearned = () => {
        this.setState({ show: true, available: false, selected: false })
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
