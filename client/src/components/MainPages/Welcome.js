import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import axios from "axios";

class Welcome extends Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            loading: true,

            redirectToHome: false,
            redirectToGetStarted: false,
            redirectToDashboard: false,

            allStates: [],
            currentState: {},
            cities: [],

            firstName: "",
            lastName: "",
            birthDate: "",
            gender: "",
            state: "",
            city: "",
            isMentor: "",
            description: ""
        };
    }

    componentDidMount() {
        const self = this;
    
        axios.all([
            axios.get("/api/allStates"),
            axios.get("/api/user")
        ])
        .then(axios.spread((res1, res2) => {
            if (res2.data.description) {
                if (res2.data.skills.length > 0) {
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
                    allStates: res1.data,
                    currentState: res1.data[0],
                    cities: res1.data[0].cities,
                    firstName: res2.data.firstName,
                    lastName: res2.data.lastName
                });
            }
        }))
        .catch(function (error) {
            self.setState({
                redirectToHome: true
            });
            console.log(error);
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            birthDate: new Date(this.state.birthDate),
            gender: this.state.gender,
            state: this.state.state,
            city: this.state.city,
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
                                <div id="welcome-pic" />

                                <div className="centered" id="welcome-form">
                                    <header id="welcome-form-title">
                                        <h2>One last step!</h2>
                                    </header>

                                    <form onSubmit={this.handleSubmit}>
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

                                        <label id="role">Role</label>
                                        <select
                                            id="role"
                                            value={this.state.isMentor}
                                            onChange={(event) => this.setState({ isMentor: event.target.value })}
                                            required>
                                            <option value="" disabled={true}>---</option>
                                            <option value={true}>Mentor</option>
                                            <option value={false}>Mentee</option>
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

                                        <button type="submit" className="button" id="welcome-btn">Submit</button>
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
