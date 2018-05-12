import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

class EditProfile extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            show: false,
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            birthDate: this.formatDate(new Date(this.props.user.birthDate)),
            gender: this.props.user.gender,
            location: this.props.user.location,
            isMentor: this.props.user.isMentor,
            description: this.props.user.description
        };
    }

    /* ============================================================================================================= */

    handleClose() {
        this.setState({
            show: false
        });
    }

    handleShow() {
        this.setState({
            show: true
        });
    }

    handleSubmit(e) {
        const self = this;

        e.preventDefault();
        axios.post("/api/editUser", {
            firstName: self.state.firstName,
            lastName: self.state.lastName,
            birthDate: new Date(self.state.birthDate),
            gender: self.state.gender,
            location: self.state.location,
            isMentor: self.state.isMentor,
            description: self.state.description
        })
            .then(function () {
                self.props.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    formatDate = (date) => {
        let yyyy = date.getFullYear().toString();
        let MM = (date.getMonth() + 1).toString();
        let dd = date.getDate().toString();

        return (
            yyyy + "-" +
            (MM.split("")[1] ? (MM) : ("0" + MM.split("")[0])) + "-" +
            (dd.split("")[1] ? (dd) : ("0" + dd.split("")[0]))
        );
    };

    /* ============================================================================================================= */

    render() {
        return (
            <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                <Modal.Header id="popups-header">
                    <Modal.Title className="modal-title-popups">
                        EDIT PROFILE
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={this.handleSubmit} id="edit-profile-form">
                        <label id="firstName">First Name</label>
                        <label id="lastName">Last Name</label>

                        <input
                            id="firstName"
                            type="text"
                            value={this.state.firstName}
                            onChange={(event) => this.setState({ firstName: event.target.value })}
                            required />

                        <input
                            id="lastName"
                            type="text"
                            value={this.state.lastName}
                            onChange={(event) => this.setState({ lastName: event.target.value })}
                            required />

                        <label id="location">Location</label>
                        <input
                            id="location"
                            type="text"
                            placeholder="Enter location here..."
                            value={this.state.location}
                            onChange={(event) => this.setState({ location: event.target.value })}
                            required />

                        <label id="birthDate">Date of Birth</label>
                        <label id="gender">Gender</label>

                        <input
                            id="birthDate"
                            type="date"
                            value={this.state.birthDate}
                            onChange={(event) => this.setState({ birthDate: event.target.value })}
                            required />

                        <select
                            id="gender"
                            value={this.state.gender}
                            onChange={(event) => this.setState({ gender: event.target.value })}
                            required>
                            <option value="" disabled={true}>---</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>

                        <label id="description">Description</label>
                        <textarea
                            id="description"
                            rows="5"
                            placeholder="Describe yourself here..."
                            value={this.state.description}
                            onChange={(event) => this.setState({ description: event.target.value })}
                            required />

                        <div id="modal-button">
                            <button type="submit" className="button" id="popups-btn">Save</button>
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer id="popups-footer">
                    <Button onClick={this.handleClose} id="close-btn">&times;</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default EditProfile;
