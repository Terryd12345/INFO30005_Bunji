import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from 'axios';

class NewEvent extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            show: false,
            register: true,
            title: '',
            location: '',
            invite: '',
            date: '',
            time: ''
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true })
    }

    handleSubmit(event) {
        axios.post("/api/newevent", {
            title: this.state.title,
            date: this.state.date,
            location: this.state.location
        });
        this.handleClose();
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    render() {

        return (
            <div>
                <div onClick={this.handleShow} className="badge centered" id="badge-2">
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
                        <input type="text" value={this.state.title}
                        onChange={(event) => this.setState({title: event.target.value})} />
                      </label>
                      <br />
                      <label>
                        Location:
                        <br />
                        <input type="text"
                        value={this.state.location}
                        onChange={(event) => this.setState({location: event.target.value})} />
                      </label>
                      <br />
                      <label>
                        Invite:
                        <br />
                        <input type="text"
                         value={this.state.invite}
                         onChange={(event) => this.setState({invite: event.target.value})} />
                      </label>
                      <br />
                      <label>
                        Date:
                        <br />
                        <input type="date"
                        value={this.state.date}
                        onChange={(event) => this.setState({date: event.target.value})} />
                      </label>
                      <label>
                        Time:
                        <br />
                        <input type="time"
                        value={this.state.time}
                        onChange={(event) => this.setState({time: event.target.value})} />
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

export default NewEvent;
