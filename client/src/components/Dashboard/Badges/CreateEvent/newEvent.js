import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class CreateEvent extends Component {
    constructor(props) {
        super(props);

        this.updateSelectedSkills = this.updateSelectedSkills.bind(this);
        this.closeAll = this.closeAll.bind(this);
        this.showSelected = this.showSelected.bind(this);
        this.showLearned = this.showLearned.bind(this);

        this.state = {
            show: false,
        };
    }

    closeAll() {
        this.setState({ show: false });
    }
    
    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.closeAll} animation={true}>
                </Modal>
            </div>
        );
    }

}
