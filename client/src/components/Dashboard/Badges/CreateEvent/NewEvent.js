import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class NewEvent extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = {
            show: false,
            register: true
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true })
    }

    render() {
        const activeRegister = {
            backgroundColor: "#f1f1f1",
            borderTopLeftRadius: "6px"
        };

        const activeLogin = {
            backgroundColor: "#f1f1f1",
            borderTopRightRadius: "6px"
        };

        return (
            <div>
                <div onClick={this.handleShow} className="badge centered" id="badge-2">
                    <h5>
                        <img src={require("../../../../images/icons/create.png")} alt="Icon" />
                        Create an Event
                    </h5>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                    <Modal.Header>
                        hi
                    </Modal.Header>

                    <Modal.Body>
                        Body text
                    </Modal.Body>
                </Modal>
            </div>
        )
    };
}

export default NewEvent;
