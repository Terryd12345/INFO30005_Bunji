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

        return (
            <div>
                <div onClick={this.handleShow} className="badge centered" id="badge-3">
                    <h5>
                        <img src={require("../../../../images/icons/find.png")} alt="Icon" />
                        Find Mentor
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
