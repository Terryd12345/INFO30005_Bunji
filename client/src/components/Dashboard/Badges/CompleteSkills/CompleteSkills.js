import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
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
            current: true
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
        return (
            <div>
                <Modal show={this.state.show} onHide={this.closeAll} animation={true}>
                    
                    <Modal.Header>
                        <Modal.Title id="register-title">
                            <a onClick={this.showSelected}>Selected</a>
                        </Modal.Title>
                        <Modal.Title id="login-title">
                            <a onClick={this.showLearned}>Learned</a>
                        </Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                        <div id="signup">
                            {
                                this.state.selected ? <Selected /> : <Learned />
                            }
                        </div>
                    </Modal.Body>
                    
                    <Modal.Footer>
                        <Button onClick={this.closeAll}>Close</Button>
                    </Modal.Footer>
                
                </Modal>
            </div>
        )
    };
};

export default CompleteSkills;
