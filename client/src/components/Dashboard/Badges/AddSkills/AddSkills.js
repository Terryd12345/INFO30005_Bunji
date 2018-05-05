import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Available from "./Available";
import Selected from "./Selected";
import axios from "axios";

class AddSkills extends Component {
    constructor(props) {
        super(props);
        
        this.updateSelectedSkills = this.updateSelectedSkills.bind(this);
        this.closeAll = this.closeAll.bind(this);
        this.showAvailable = this.showAvailable.bind(this);
        this.showSelected = this.showSelected.bind(this);
        
        this.state = {
            show: false,
            available: true,
    
            availableSkills: [],
            arrAvailable: [],
            
            selectedSkills: [],
            arrSelected: []
        };
    }
    
    componentDidMount() {
        var self = this;
    
        axios.get("/api/allSkills")
        .then(function (res) {
            self.setState({ availableSkills: res.data, selectedSkills: res.data });
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
        this.setState({ show: true, available: true })
    }
    
    showSelected = () => {
        this.setState({ show: true, available: false })
    }
    
    render() {
        const activeAvailable = {
            backgroundColor: "#f1f1f1",
            borderTopLeftRadius: "6px"
        }
        
        const activeSelected = {
            backgroundColor: "#f1f1f1",
            borderTopRightRadius: "6px"
        }
        
        return (
            <div>
                <Modal show={this.state.show} onHide={this.closeAll} animation={true}>
                    <Modal.Header>
                        <Modal.Title className="modal-title-dashboard" id="left-title" onClick={this.showAvailable} style={this.state.available ? null : activeAvailable}>
                            AVAILABLE
                        </Modal.Title>
                        <Modal.Title className="modal-title-dashboard" id="right-title" onClick={this.showSelected} style={this.state.available ? activeSelected : null}>
                            SELECTED
                        </Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                        <div id="signup">
                            {
                                this.state.available ? <Available skills={this.state.availableSkills} updateSelectedSkills={this.updateSelectedSkills} /> : <Selected skills={this.state.selectedSkills} updateSelectedSkills={this.updateSelectedSkills} />
                            }
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    };
};

export default AddSkills;
