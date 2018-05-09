import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

class CreateEvent extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

        this.state = {
            show: false,
            register: true,
            title: "",
            location: "",
            invite: "",
            invite_id: "",
            date: "",
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
                    // invite: res.data.connections[0].firstName + " " + res.data.connections[0].lastName,
                    // invite_id: res.data.connections[0]._id
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

    handleSubmit(event) {
        axios.post("/api/createEvent", {
            title: this.state.title,
            date: new Date(this.state.date + " " + this.state.time),
            location: this.state.location,
            user2: this.state.invite_id
        });
        this.handleClose();
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }
    
    /* ============================================================================================================= */

    render() {
        return (
            <div>
                <div onClick={this.handleShow} className="popup centered" id="popup-2">
                    <h5>
                        <img src={require("../../../../images/icons/create.png")} alt="Icon" />
                        Create an Event
                    </h5>
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
                            <input id="title"
                                   type="text"
                                   value={this.state.title}
                                   onChange={(event) => this.setState({ title: event.target.value })}
                                   required />
                            
                            <label id="invite">Invitee</label>
                            <select id="invite"
                                    name="connections"
                                    data-id={this.state.invite_id}
                                    value={this.state.invite}
                                    onChange={(event) => this.setState({
                                        invite: event.target.options[event.target.selectedIndex].value,
                                        invite_id: event.target.options[event.target.selectedIndex].dataset.id
                                    })}
                                    required>
                                <option value="" disabled={true}>---</option>
                                {
                                    this.state.userConnections.map(person => {
                                        return <option data-id={person._id}
                                                       value={person.firstName + " " + person.lastName}>
                                            {person.firstName + " " + person.lastName}
                                        </option>
                                    })
                                }
                            </select>
                            
                            <label id="location">Location</label>
                            <input id="location"
                                   type="text"
                                   value={this.state.location}
                                   onChange={(event) => this.setState({ location: event.target.value })}
                                   required />
                            
                            <label id="date">Date</label>
                            <label id="time">Time</label>
                            
                            <input id="date"
                                   type="date"
                                   value={this.state.date}
                                   onChange={(event) => this.setState({ date: event.target.value })}
                                   required />
                            
                            <input id="time"
                                   type="time"
                                   value={this.state.time}
                                   onChange={(event) => this.setState({ time: event.target.value })}
                                   required />
    
                            <div id="modal-button">
                                <button type="submit" className="button" id="popups-btn">Submit</button>
                            </div>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default CreateEvent;
