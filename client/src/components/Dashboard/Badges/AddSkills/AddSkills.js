import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import Available from "./Available";
import Selected from "./Selected";

class AddSkills extends Component {
    constructor(props) {
        super(props);
        
        this.closeAll = this.closeAll.bind(this);
        this.showAvailable = this.showAvailable.bind(this);
        this.showSelected = this.showSelected.bind(this);
        
        this.state = {
            show: false,
            available: true
        };
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
        return (
            <div>
                <Modal show={this.state.show} onHide={this.closeAll} animation={true}>
                    
                    <Modal.Header>
                        <Modal.Title id="register-title">
                            <a onClick={this.showAvailable}>Available</a>
                        </Modal.Title>
                        <Modal.Title id="login-title">
                            <a onClick={this.showSelected}>Selected</a>
                        </Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                        <div id="signup">
                            {
                                this.state.available ? <Available /> : <Selected />
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

export default AddSkills;
