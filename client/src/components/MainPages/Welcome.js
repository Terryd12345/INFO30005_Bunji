import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios/index";

class Welcome extends Component {
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state = {
            redirect: false,
            birthDate: "",
            gender: "",
            location: "",
            isMentor: "",
            description: ""
        };
    }
    
    handleSubmit(e) {
        const self = this;
        
        e.preventDefault();
        axios.post("/api/editUser", {
            birthDate: new Date(this.state.birthDate),
            gender: this.state.gender,
            location: this.state.location,
            isMentor: this.state.isMentor,
            description: this.state.description
        })
            .then(function () {
                self.setState({ redirect: true });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    render() {
        return (
            <div id="page-wrap">
                {
                    this.state.redirect ?
                        (<Redirect to="/get-started"/>)
                    : (
                        <div id="welcome">
                            <div id="welcome-pic"/>
                
                            <div className="centered" id="welcome-form">
                                <header id="welcome-form-title">
                                    <h2>One last step!</h2>
                                </header>
                    
                                <form onSubmit={this.handleSubmit}>
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
                        
                                    <label id="role">Role</label>
                                    <select id="role"
                                            value={this.state.isMentor}
                                            onChange={(event) => this.setState({isMentor: event.target.value})}
                                            required>
                                        <option value="" disabled={true}>---</option>
                                        <option value={true}>Mentor</option>
                                        <option value={false}>Mentee</option>
                                    </select>
                        
                                    <label id="location">Location</label>
                                    <input id="location"
                                           type="text"
                                           placeholder="Enter location here..."
                                           value={this.state.location}
                                           onChange={(event) => this.setState({location: event.target.value})}
                                           required/>
                        
                                    <label id="description">Description</label>
                                    <textarea id="description"
                                              rows="5"
                                              placeholder="Describe yourself here..."
                                              value={this.state.description}
                                              onChange={(event) => this.setState({description: event.target.value})}
                                              required/>
                        
                                    <button type="submit" className="button" id="welcome-btn">Confirm</button>
                                </form>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    };
}

export default Welcome;
