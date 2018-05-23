import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Calendar from 'react-calendar';


class CreateEvent extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            show: false,
            register: true,
            title: "",
            location: "",
            invite: "",
            invite_id: "",
            date: new Date(),
            time: "",
            userConnections: []
        };
    }

    componentDidMount() {
        const self = this;

        axios.get("/api/user")
            .then((res) => {
                self.setState({
                    userConnections: res.data.connections
                })
            })
            .catch((error) => {
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
        })
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit(e) {
        const self = this;

        e.preventDefault();
        axios.post("/api/createEvent", {
            title: self.state.title,
            date: self.state.date,
            location: self.state.location,
            user2: self.state.invite_id
        })
            .catch(function (error) {
                console.log(error);
            });
        self.props.reload();
    }

    /* ============================================================================================================= */

    render() {
        return (
            <div>
                <div onClick={this.handleShow} className="popup centered" id="popup-2">
                    <h6>
                        <img src={require("../../../../images/icons/create.png")} alt="Icon" />
                        Create an Event
                    </h6>
                </div>

                <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
                    <Modal.Header id="popups-header">
                        <Modal.Title className="modal-title-popups">
                            CREATE A NEW EVENT
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form onSubmit={this.handleSubmit} id="event-form">
                            <label id="title">Title</label>
                            <input
                                id="title"
                                type="text"
                                value={this.state.title}
                                onChange={(event) => this.setState({ title: event.target.value })}
                                required />

                            <label id="invite">Invitee</label>
                            <select
                                id="invite"
                                name="connections"
                                data-id={this.state.invite_id}
                                value={this.state.invite}
                                onChange={(event) => this.setState({
                                    invite: event.target.options[event.target.selectedIndex].value,
                                    invite_id: event.target.options[event.target.selectedIndex].dataset.id
                                })}
                                required>
                                <option key="" value="" disabled={true}>---</option>
                                {
                                    this.state.userConnections.map(person => {
                                        return <option key={person._id}
                                            data-id={person._id}
                                            value={person.firstName + " " + person.lastName}>
                                            {person.firstName + " " + person.lastName}
                                        </option>
                                    })
                                }
                            </select>

                            <label id="location">Location</label>
                            <input
                                id="location"
                                type="text"
                                value={this.state.location}
                                onChange={(event) => this.setState({ location: event.target.value })}
                                required />

                            <label id="date">Date</label>
                            <label id="time">Time</label>

                            <Calendar
                                onChange={(date) => this.setState({ date })}
                                value={this.state.date}
                            />


                            <input
                                id="time"
                                type="time"
                                value={this.state.time}
                                onChange={(event) => this.setState({ time: event.target.value })}
                                required />

                            <div id="modal-button">
                                <a onClick={this.handleClose} className="button" id="popups-cancel-btn">
                                    Cancel
                                </a>
                                <button type="submit" className="button" id="popups-btn">Submit</button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default CreateEvent;
