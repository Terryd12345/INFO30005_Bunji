import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import axios from "axios/index";

class Welcome extends Component {
    constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state = {
            loading: true,
            
            redirectToHome: false,
            redirectToGetStarted: false,
            redirectToDashboard: false,
            
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
                if (res.data.description) {
                    if (res.data.skills.length > 0) {
                        self.setState({
                            redirectToDashboard: true
                        });
                    } else {
                        self.setState({
                            redirectToGetStarted: true
                        });
                    }
                } else {
                    self.setState({
                        loading: false,
                        user: res.data,
                        allSkills: res.data.skills,
                        learnedSkills: res.data.learnedSkills,
                        connections: res.data.connections
                    });
                }
            })
            .catch(function (error) {
                self.setState({
                    redirectToHome: true
                });
                console.log(error);
            });
    }
    
    /* ============================================================================================================= */
    
    handleSubmit() {
        const self = this;
        
        axios.post("/api/editUser", {
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
    }
    
    /* ============================================================================================================= */
    
    render() {
        return (
            <div id="page-wrap">
                {
                    this.state.loading ? (
                        <div id="loading">
                            <MoonLoader loading={this.state.loading} />
    
                            {
                                this.state.redirectToHome ? (<Redirect to="/" />) : (null)
                            }
    
                            {
                                this.state.redirectToGetStarted ? (<Redirect to="/get-started" />) : (null)
                            }
    
                            {
                                this.state.redirectToDashboard ? (<Redirect to="/dashboard" />) : (null)
                            }
                        </div>
                    ) : (
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
