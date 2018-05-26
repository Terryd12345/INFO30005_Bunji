import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { BeatLoader } from "react-spinners";
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
        this.handleClickedSkills = this.handleClickedSkills.bind(this);
        this.updateSkills = this.updateSkills.bind(this);

        this.state = {
            loading: true,
            changed: false,
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

    componentDidMount() {
        const self = this;

        axios.all([
            axios.get("/api/allSkills"),
            axios.get("/api/user")
        ])
            .then(axios.spread((res1, res2) => {
                self.setState({
                    loading: false,
                    learned: res2.data.learned,
                    allAvailableSkills: res1.data,
                    allSelectedSkills: res2.data.skills,
                    learnedSkills: self.getSkills(res2.data.learned),
                    selectedSkills: self.filterSkills(res2.data.skills, self.getSkills(res2.data.learned)),
                    availableSkills: self.filterSkills(res1.data, res2.data.skills),
                    arrAvailable: [],
                    arrSelected: [],
                    arrLearned: []
                });
            }))
            .catch(function (error) {
                console.log(error);
            });
    }

    /* ============================================================================================================= */

    closeAll() {
        this.setState({
            loading: true,
            show: false,
            arrAvailable: [],
            arrSelected: [],
            arrLearned: []
        });

        if (this.state.changed) {
            this.setState({
                changed: false
            });
            this.props.reload();
        }
    }

    showAvailable() {
        if (this.state.loading) {
            this.componentDidMount();
        }
        this.setState({
            availableSkills: this.filterSkills(this.state.allAvailableSkills, this.state.allSelectedSkills),
            show: true,
            available: true,
            selected: false,
            arrSelected: [],
            arrLearned: []
        });
    }

    showSelected() {
        this.setState({
            selectedSkills: this.filterSkills(this.state.allSelectedSkills, this.state.learnedSkills),
            show: true,
            available: false,
            selected: true,
            arrAvailable: [],
            arrLearned: []
        });
    }

    showLearned() {
        this.setState({
            show: true,
            available: false,
            selected: false,
            arrAvailable: [],
            arrSelected: []
        });
    }

    /* ============================================================================================================= */
    
    getSkills = (arr) => {
        let skills = [];
        for (let i = 0; i < arr.length; i++) {
            skills.push(arr[i].skill);
        }
        return skills;
    };
    
    filterSkills = (keep, remove) => {
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
    };

    /* type               : (1) available, (2) selected, (3) learned
     * id                 : skill's id
     * previouslyClicked  : (true) to be removed from array, (false) to be added to array
     */
    handleClickedSkills(type, id, previouslyClicked) {
        switch (type) {
            case 1:
                if (!previouslyClicked) {
                    this.setState({
                        arrAvailable: [...this.state.arrAvailable, id]
                    })
                } else {
                    this.setState(prevState => ({
                        arrAvailable: prevState.arrAvailable.filter(skill_id => skill_id !== id)
                    }))
                }
                break;

            case 2:
                if (!previouslyClicked) {
                    this.setState({
                        arrSelected: [...this.state.arrSelected, id]
                    })
                } else {
                    this.setState(prevState => ({
                        arrSelected: prevState.arrSelected.filter(skill_id => skill_id !== id)
                    }))
                }
                break;

            case 3:
                if (!previouslyClicked) {
                    this.setState({
                        arrLearned: [...this.state.arrLearned, id]
                    })
                } else {
                    this.setState(prevState => ({
                        arrLearned: prevState.arrLearned.filter(skill_id => skill_id !== id)
                    }))
                }
                break;

            default:
                break;
        }
    }

    updateSkills(type) {
        const self = this;
        let source = "";
        let array = [];

        switch (type) {
            case 1:
                source = "/api/addSkills";
                array = this.state.arrAvailable;
                break;

            case 2:
                source = "/api/removeSkills";
                array = this.state.arrSelected;
                break;

            case 3:
                source = "/api/addLearned";
                array = this.state.arrSelected;
                break;

            case 4:
                source = "/api/removeLearned";
                
                for (let i = 0; i < this.state.learned.length; i++) {
                    if (this.state.arrLearned.includes(this.state.learned[i].skill._id)) {
                        array.push(this.state.learned[i]._id);
                    }
                }
                break;

            default:
                break;
        }

        if (array.length < 1) {
            alert("Please select a skill.");
        } else {
            axios.post(source, {
                skills: array
            })
                .then(function () {
                    console.log(array);
                    self.setState({
                        changed: true
                    });
                    self.componentDidMount();
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
            borderTopLeftRadius: "6px",
            color: "#3e3f3d"
        };

        const inactiveSelected = {
            backgroundColor: "#f1f1f1",
            color: "#3e3f3d"
        };

        const inactiveLearned = {
            backgroundColor: "#f1f1f1",
            borderTopRightRadius: "6px",
            color: "#3e3f3d"
        };

        return (
            <div>
                <div onClick={this.showAvailable} className="popup centered" id="popup-1">
                    <h6>
                        <img src={require("../../../../images/icons/add.png")} alt="Icon" />
                        Manage Skills
                    </h6>
                </div>

                <Modal show={this.state.show} onHide={this.closeAll} animation={true}>
                    <Modal.Header id="skills-header">
                        <Modal.Title
                            className="modal-title-skills"
                            id="left-title"
                            onClick={this.showAvailable}
                            style={this.state.available ? null : inactiveAvailable}>
                            AVAILABLE
                        </Modal.Title>

                        <Modal.Title
                            className="modal-title-skills"
                            id="middle-title"
                            onClick={this.showSelected}
                            style={this.state.available ? inactiveSelected : (this.state.selected ? null : inactiveSelected)}>
                            SELECTED
                        </Modal.Title>

                        <Modal.Title
                            className="modal-title-skills"
                            id="right-title"
                            onClick={this.showLearned}
                            style={this.state.available ? inactiveLearned : (this.state.selected ? inactiveLearned : null)}>
                            {this.props.isMentor ? "TAUGHT" : "LEARNED"}
                        </Modal.Title>
                    </Modal.Header>

                    {
                        this.state.loading ? (
                            <Modal.Body>
                                <div className="section-loading">
                                    <BeatLoader loading={this.state.loading} />
                                </div>
                            </Modal.Body>
                        ) : (
                            <Modal.Body>
                                {
                                    this.state.available ?
                                        <Available
                                            skills={this.state.availableSkills}
                                            updateSelected={this.handleClickedSkills}
                                            updateSkills={this.updateSkills}
                                            handleClose={this.closeAll} />
                                        : (this.state.selected ?
                                            <Selected
                                                skills={this.state.selectedSkills}
                                                updateSelected={this.handleClickedSkills}
                                                updateSkills={this.updateSkills}
                                                isMentor={this.props.isMentor}
                                                handleClose={this.closeAll} />
                                            : <Learned
                                                skills={this.state.learnedSkills}
                                                updateSelected={this.handleClickedSkills}
                                                updateSkills={this.updateSkills}
                                                isMentor={this.props.isMentor}
                                                handleClose={this.closeAll} />)
                                }
                            </Modal.Body>
                        )
                    }
                </Modal>
            </div>
        )
    };
}

export default ManageSkills;
