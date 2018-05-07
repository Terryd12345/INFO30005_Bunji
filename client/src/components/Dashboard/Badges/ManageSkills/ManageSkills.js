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
        this.updateSelectedAvailable = this.updateSelectedAvailable.bind(this);
        this.updateSelectedSelected = this.updateSelectedSelected.bind(this);
        this.updateSelectedLearned = this.updateSelectedLearned.bind(this);
        this.filterAvailableSkills = this.filterAvailableSkills.bind(this);
        this.filterSelectedSkills = this.filterSelectedSkills.bind(this);
        this.selectSkills = this.selectSkills.bind(this);
        this.unselectSkills = this.unselectSkills.bind(this);
        this.addLearned = this.addLearned.bind(this);
        this.removeLearned = this.removeLearned.bind(this);
        
        this.state = {
            show: false,
            available: true,
            selected: false,
            allAvailableSkills: [],
            allSelectedSkills: [],
            availableSkills: [],
            arrAvailable: [],
            selectedSkills: [],
            arrSelected: [],
            learnedSkills: [],
            arrLearned: []
        };
    }
    
    componentDidUpdate() {
        const self = this;
    
        axios.get("/api/user")
            .then(function (res) {
                self.setState({ allSelectedSkills: res.data.skills, learnedSkills: res.data.learnedSkills,
                                selectedSkills: self.filterSelectedSkills(res.data.skills) });
            })
            .catch(function (error) {
                console.log(error);
            });
    
        axios.get("/api/allSkills")
            .then(function (res) {
                self.setState({ allAvailableSkills: res.data,
                                availableSkills: self.filterAvailableSkills(res.data) });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    /* ============================================================================================================= */
    
    closeAll() {
        this.setState({ show: false, arrAvailable: [], arrSelected: [], arrLearned: [] });
    }
    
    showAvailable() {
        this.setState({ availableSkills: this.filterAvailableSkills(this.state.allAvailableSkills),
                        show: true, available: true, selected: false,
                        arrSelected: [], arrLearned: [] });
    }
    
    showSelected() {
        this.setState({ selectedSkills: this.filterSelectedSkills(this.state.allSelectedSkills),
                        show: true, available: false, selected: true,
                        arrAvailable: [], arrLearned: [] });
    }
    
    showLearned() {
        this.setState({ show: true, available: false, selected: false,
                        arrAvailable: [], arrSelected: [] });
    }
    
    /* ============================================================================================================= */
    
    updateSelectedAvailable(id, state) {
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
    
    updateSelectedSelected(id, state) {
        if (state === false) {
            this.setState({
                arrSelected: [...this.state.arrSelected, id]
            })
        }
        else {
            this.setState(prevState => ({
                arrSelected: prevState.arrSelected.filter(skill_id => skill_id !== id)
            }))
        }
    }
    
    updateSelectedLearned(id, state) {
        if (state === false) {
            this.setState({
                arrLearned: [...this.state.arrLearned, id]
            })
        }
        else {
            this.setState(prevState => ({
                arrLearned: prevState.arrLearned.filter(skill_id => skill_id !== id)
            }))
        }
    }
    
    /* ============================================================================================================= */
    
    filterAvailableSkills(e) {
        let available = e;
        let selected = this.state.allSelectedSkills;
    
        for(let i=available.length-1; i>=0; i--) {
            for(let j=0; j<selected.length; j++) {
                if(available[i]._id === selected[j]._id) {
                    available = [
                        ...available.slice(0, i),
                        ...available.slice(i+1)
                    ];
                    break;
                }
            }
        }
        return available;
    }
    
    filterSelectedSkills(e) {
        let selected = e;
        let learned = this.state.learnedSkills;
        
        for(let i=selected.length-1; i>=0; i--) {
            for(let j=0; j<learned.length; j++) {
                if(selected[i]._id === learned[j]._id) {
                    selected = [
                        ...selected.slice(0, i),
                        ...selected.slice(i+1)
                    ];
                    break;
                }
            }
        }
        return selected;
    }
    
    /* ============================================================================================================= */
    
    selectSkills() {
        const self = this;
        
        if (this.state.arrAvailable.length < 1) {
            alert("Please select a skill.");
        } else {
            axios.post("/api/addSkills", {
                skills: self.state.arrAvailable
            })
            .then(function () {
                self.componentDidUpdate();
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
    
    unselectSkills() {
        const self = this;
        
        if (this.state.arrSelected.length < 1) {
            alert("Please select a skill.");
        } else {
            axios.post("/api/removeSkills", {
                skills: self.state.arrSelected
            })
            .then(function () {
                self.componentDidUpdate();
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
    
    addLearned() {
        const self = this;
        
        if (this.state.arrSelected.length < 1) {
            alert("Please select a skill.");
        } else {
            axios.post("/api/addLearned", {
                skills: self.state.arrSelected
            })
            .then(function () {
                self.componentDidUpdate();
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
    
    removeLearned() {
        const self = this;
        
        if (this.state.arrLearned.length < 1) {
            alert("Please select a skill.");
        } else {
            axios.post("/api/removeLearned", {
                skills: self.state.arrLearned
            })
            .then(function () {
                self.componentDidUpdate();
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
    
    /* ============================================================================================================= */
    
    render() {
        const inactiveAvailable = {
            backgroundColor: "#f1f1f1",
            borderTopLeftRadius: "6px"
        };
        
        const inactiveSelected = {
            backgroundColor: "#f1f1f1"
        };
    
        const inactiveLearned = {
            backgroundColor: "#f1f1f1",
            borderTopRightRadius: "6px"
        };
        
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
                                this.state.available ? <Available skills={this.state.availableSkills}
                                                                  updateSelectedSkills={this.updateSelectedAvailable}
                                                                  selectSkills={this.selectSkills} />
                                    : (this.state.selected ? <Selected skills={this.state.selectedSkills}
                                                                       updateSelectedSkills={this.updateSelectedSelected}
                                                                       unselectSkills={this.unselectSkills}
                                                                       addLearned={this.addLearned} />
                                    : <Learned skills={this.state.learnedSkills}
                                               updateSelectedSkills={this.updateSelectedLearned}
                                               removeLearned={this.removeLearned} />)
                            }
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    };
}

export default ManageSkills;
