import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Selected from "../ManageSkills/Selected";
import Learned from "../ManageSkills/Learned";

class CompleteSkills extends Component {
    constructor(props) {
        super(props);

        this.updateSelectedSkills = this.updateSelectedSkills.bind(this);
        this.closeAll = this.closeAll.bind(this);
        this.showSelected = this.showSelected.bind(this);
        this.showLearned = this.showLearned.bind(this);

        this.state = {
            show: false,
            selected: true,

            selectedSkills: [],
            arrSelected: [],

            learnedSkills: [],
            arrLearned: []
        };
    }

    componentDidMount() {
        const self = this;

        axios.get("/api/allSkills")
            .then(function (res) {
                self.setState({ selectedSkills: res.data, learnedSkills: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    updateSelectedSkills(id, state) {
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

    closeAll() {
        this.setState({ show: false });
    }

    showSelected() {
        this.setState({ show: true, selected: true })
    }

    showLearned() {
        this.setState({ show: true, selected: false })
    }

    render() {
        const activeSelected = {
            backgroundColor: "#f1f1f1",
            borderTopLeftRadius: "6px"
        };

        const activeLearned = {
            backgroundColor: "#f1f1f1",
            borderTopRightRadius: "6px"
        };

        return (
            <div>
                <Modal show={this.state.show} onHide={this.closeAll} animation={true}>
                    <Modal.Header>
                        <Modal.Title className="modal-title-dashboard" id="left-title" onClick={this.showSelected} style={this.state.selected ? null : activeSelected}>
                            SELECTED
                        </Modal.Title>
                        <Modal.Title className="modal-title-dashboard" id="right-title" onClick={this.showLearned} style={this.state.selected ? activeLearned : null}>
                            LEARNED
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div id="signup">
                            {
                                this.state.selected ? <Selected skills={this.state.selectedSkills} updateSelectedSkills={this.updateSelectedSkills} /> : <Learned skills={this.state.learnedSkills} updateSelectedSkills={this.updateSelectedSkills} />
                            }
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    };
}

export default CompleteSkills;
