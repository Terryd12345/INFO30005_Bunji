import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Selected from "../AddSkills/Selected";
import Learned from "./Learned";

class CompleteSkills extends Component {
    constructor(props) {
        super(props);
        
        this.closeAll = this.closeAll.bind(this);
        this.showSelected = this.showSelected.bind(this);
        this.showLearned = this.showLearned.bind(this);
        
        this.state = {
            show: false,
            selected: true,
    
            selectedSkills: [
                {
                    skill: "iPad",
                    imagePath: "apple"
                },
                {
                    skill: "iPhone",
                    imagePath: "apple"
                },
                {
                    skill: "Facebook",
                    imagePath: "facebook"
                },
                {
                    skill: "Twitter",
                    imagePath: "twitter"
                },
                {
                    skill: "Instagram",
                    imagePath: "instagram"
                },
                {
                    skill: "LinkedIn",
                    imagePath: "linkedin"
                },
                {
                    skill: "iPad",
                    imagePath: "apple"
                },
                {
                    skill: "iPhone",
                    imagePath: "apple"
                }
            ],
    
            learnedSkills: [
                {
                    skill: "Facebook",
                    imagePath: "facebook"
                },
                {
                    skill: "Twitter",
                    imagePath: "twitter"
                },
                {
                    skill: "Instagram",
                    imagePath: "instagram"
                },
                {
                    skill: "LinkedIn",
                    imagePath: "linkedin"
                },
                {
                    skill: "iPad",
                    imagePath: "apple"
                },
                {
                    skill: "iPhone",
                    imagePath: "apple"
                },
                {
                    skill: "Facebook",
                    imagePath: "facebook"
                },
                {
                    skill: "Twitter",
                    imagePath: "twitter"
                },
                {
                    skill: "Instagram",
                    imagePath: "instagram"
                },
                {
                    skill: "LinkedIn",
                    imagePath: "linkedin"
                },
                {
                    skill: "iPad",
                    imagePath: "apple"
                },
                {
                    skill: "iPhone",
                    imagePath: "apple"
                }
            ]
        };
    }
    
    closeAll() {
        this.setState({ show: false });
    }
    
    showSelected() {
        this.setState({ show: true, selected: true })
    }
    
    showLearned = () => {
        this.setState({ show: true, selected: false })
    }
    
    render() {
        const activeSelected = {
            backgroundColor: "#f1f1f1",
            borderTopLeftRadius: "6px"
        }
    
        const activeLearned = {
            backgroundColor: "#f1f1f1",
            borderTopRightRadius: "6px"
        }
        
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
                                this.state.selected ? <Selected skills={this.state.selectedSkills} /> : <Learned skills={this.state.learnedSkills} />
                            }
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    };
};

export default CompleteSkills;
