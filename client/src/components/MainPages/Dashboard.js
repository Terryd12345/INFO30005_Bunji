import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import axios from "axios";
import PersonalProfile from "../Dashboard/PersonalProfile/PersonalProfile";
import Popups from "../Dashboard/Popups/Popups";
import Notifications from "../Dashboard/Notifications/Notifications";
import Contacts from "../Dashboard/Contacts/Contacts";
import Events from "../Dashboard/Events/Events";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.reload = this.reload.bind(this);

        this.state = {
            loading: true,
            user: {},
            isMentor: false,

            redirectToHome: false,
            redirectToWelcome: false,
            redirectToGetStarted: false,

            allSkills: [],
            learnedSkills: [],
            selectedSkills: [],

            connections: [],
            events: [],

            notifications: [
                {
                    _id: "1",
                    user: "James",
                    imagePath: "https://res.cloudinary.com/dfocutu6i/image/upload/v1526126616/w3zjcaang6oherqmnygo.jpg"
                },
                {
                    _id: "2",
                    user: "Jane",
                    imagePath: "https://res.cloudinary.com/dfocutu6i/image/upload/v1526126662/lhrajxxmtrr7fpa8uyea.jpg"
                },
                {
                    _id: "3",
                    user: "Fred",
                    imagePath: "https://res.cloudinary.com/dfocutu6i/image/upload/v1526126735/kiuuaemkcqhld9ncrfow.jpg"
                }
            ]
        };
    }

    componentDidMount() {
        const self = this;

        axios.get("/api/events")
            .then(function (res) {
                self.setState({
                    events: res.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get("/api/user")
            .then(function (res) {
                if (res.data.description) {
                    if (res.data.skills.length > 0) {
                        self.setState({
                            loading: false,
                            user: res.data,
                            isMentor: res.data.isMentor,
                            allSkills: res.data.skills,
                            learnedSkills: res.data.learnedSkills,
                            connections: res.data.connections
                        });
                    } else {
                        self.setState({
                            redirectToGetStarted: true
                        });
                    }
                } else {
                    self.setState({
                        redirectToWelcome: true
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

    reload() {
        this.setState({
            loading: true
        });
        this.componentDidMount();
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
                                this.state.redirectToWelcome ? (<Redirect to="/welcome" />) : (null)
                            }
                            {
                                this.state.redirectToGetStarted ? (<Redirect to="/get-started" />) : (null)
                            }
                        </div>
                    ) : (
                        <div id="dashboard-outer">
                            <div id="dashboard">
                                <PersonalProfile
                                    user={this.state.user}
                                    isMentor={this.state.isMentor}
                                    connections={this.state.connections}
                                    events={this.state.events}
                                    allSkills={this.state.allSkills}
                                    learnedSkills={this.state.learnedSkills}
                                    reload={this.reload} />
                                <Popups
                                    isMentor={this.state.isMentor}
                                    reload={this.reload} />
                                <Notifications notifications={this.state.notifications} />
                                <Contacts
                                    isMentor={this.state.isMentor}
                                    connections={this.state.connections} />
                                <Events events={this.state.events} />
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Dashboard;
