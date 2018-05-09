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
            date: "",
            time: "",
            userConnections: []
        };
    }

    componentDidMount(){
        var self = this;
        axios.get("/api/user")
            .then((res) => {
                self.setState({ userConnections: res.data.connections })
            })
            .catch((error) => {
                console.log(error);
            });
    }

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
        axios.post("/api/newevent", {
            title: this.state.title,
            date: new Date(this.state.date + " " + this.state.time),
            location: this.state.location
        });
        this.handleClose();
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <div>
                <div onClick={this.handleShow} className="popup centered" id="popup-2">
                    <h5>
                        <img src={require("../../../../images/icons/create.png")} alt="Icon" />
                        Create an Event
                    </h5>
                </div>


                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create a New Event</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Title:
                                <br />
                                <input type="text"
                                       value={this.state.title}
                                       onChange={(event) => this.setState({ title: event.target.value })} />
                            </label>

                            <br />

                            <label>
                                Location:
                                <br />
                                <input type="text"
                                       value={this.state.location}
                                       onChange={(event) => this.setState({ location: event.target.value })} />
                            </label>

                            <br />

                            <label>
                                Invite:
                                <br />
                                <input type="text" list="connections"
                                       value={this.state.invite}
                                       onChange={(event) => this.setState({ invite: event.target.value })} />
                                <datalist id="connections">
                                    this.state.userConnections.map((person) => <option value="person" />)
                                </datalist>
                                <h1>{this.state.userConnections.length}</h1>
                            </label>

                            <br />

                            <label>
                                Date:
                                <br />
                                <input type="date"
                                       value={this.state.date}
                                       onChange={(event) => this.setState({ date: event.target.value })} />
                            </label>

                            <label>
                                Time:
                                <br />
                                <input type="time"
                                       value={this.state.time}
                                       onChange={(event) => this.setState({ time: event.target.value })} />
                            </label>

                            <br />

                            <input type="submit" value="Submit" />
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
