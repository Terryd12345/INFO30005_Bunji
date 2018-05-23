import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

class EditProfile extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            show: false,

            allStates: [],
            currentState: {},
            cities: [],

            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            birthDate: this.formatDate(new Date(this.props.user.birthDate)),
            gender: this.props.user.gender,
            state: this.props.user.state,
            city: this.props.user.city,
            isMentor: this.props.user.isMentor,
            description: this.props.user.description
        };
    }

    componentDidMount() {
        const self = this;
        
        axios.get("/api/allStates")
        .then(function (res) {
            let state = res.data.find(state => state.state === self.props.user.state);
            self.setState({
                allStates: res.data,
                currentState: state,
                cities: state.cities
            })
        })
        .catch(function (error) {
            console.log(error);
        });
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
    
    handleChange(e) {
        let state = this.state.allStates.find(state => state.state === e.target.value);
        this.setState({
            state: e.target.value,
            currentState: state,
            cities: state.cities
        })
    }

    handleSubmit(e) {
        const self = this;

        e.preventDefault();
        axios.post("/api/editUser", {
            firstName: self.state.firstName,
            lastName: self.state.lastName,
            birthDate: new Date(self.state.birthDate),
            gender: self.state.gender,
            state: self.state.state,
            city: self.state.city,
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

                        <label id="state">State</label>
                        <label id="city">City/Town</label>

                        <select
                            id="state"
                            value={this.state.state}
                            onChange={this.handleChange}
                            required>
                            {
                                this.state.allStates.map(state => {
                                    return <option key={state.state} value={state.state}>{state.state}</option>
                                })
                            }
                        </select>

                        <select
                            id="city"
                            value={this.state.city}
                            onChange={(event) => this.setState({ city: event.target.value })}
                            required>
                            {
                                this.state.cities.map(city => {
                                    return <option key={city} value={city}>{city}</option>
                                })
                            }
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
                            <a onClick={this.handleClose} className="button" id="popups-cancel-btn">
                                Cancel
                            </a>
                            <button type="submit" className="button" id="popups-btn">
                                Save
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        );
    }
}

export default EditProfile;
