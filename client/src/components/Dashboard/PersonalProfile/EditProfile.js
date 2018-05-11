import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios/index";

class EditProfile extends Component {
    constructor(props) {
        super(props);
        
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state = {
            show: false,
            firstName: "",
            lastName: "",
            birthDate: "",
            gender: "",
            location: "",
            isMentor: "",
            description: ""
        };
    }
    
    componentDidMount() {
        const self = this;
        
        axios.get("/api/user")
            .then(function (res) {
                self.setState({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    birthDate: self.formatDate(new Date(res.data.birthDate)),
                    gender: res.data.gender,
                    location: res.data.location,
                    isMentor: res.data.isMentor,
                    description: res.data.description
                });
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
    
    handleSubmit(event) {
        const self = this;
        
        axios.post("/api/editUser", {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            birthDate: new Date(this.state.birthDate),
            gender: this.state.gender,
            location: this.state.location,
            isMentor: this.state.isMentor,
            description: this.state.description
        })
            .then(function () {
                self.setState({
                    loading: true,
                    redirectToGetStarted: true
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        this.handleClose();
        event.preventDefault();
    }
    
    formatDate = (date) => {
        let yyyy = date.getFullYear().toString();
        let MM = (date.getMonth()+1).toString();
        let dd  = date.getDate().toString();
        
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
                        
                        <input id="firstName"
                               type="text"
                               value={this.state.firstName}
                               onChange={(event) => this.setState({firstName: event.target.value})}
                               required/>
    
                        <input id="lastName"
                               type="text"
                               value={this.state.lastName}
                               onChange={(event) => this.setState({lastName: event.target.value})}
                               required/>
                        
                        <label id="location">Location</label>
                        <input id="location"
                               type="text"
                               placeholder="Enter location here..."
                               value={this.state.location}
                               onChange={(event) => this.setState({location: event.target.value})}
                               required/>
                        
                        <label id="birthDate">Date of Birth</label>
                        <label id="gender">Gender</label>
                        
                        <input id="birthDate"
                               type="date"
                               value={this.state.birthDate}
                               onChange={(event) => this.setState({birthDate: event.target.value})}
                               required/>
                        
                        <select id="gender"
                                value={this.state.gender}
                                onChange={(event) => this.setState({gender: event.target.value})}
                                required>
                            <option value="" disabled={true}>---</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        
                        <label id="description">Description</label>
                        <textarea id="description"
                                  rows="5"
                                  placeholder="Describe yourself here..."
                                  value={this.state.description}
                                  onChange={(event) => this.setState({description: event.target.value})}
                                  required/>
                        
                        <div id="modal-button">
                            <button type="submit" className="button" id="popups-btn">Save</button>
                        </div>
                    </form>
                </Modal.Body>
                
                <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default EditProfile;
