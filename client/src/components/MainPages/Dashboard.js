import React, { Component } from "react";
import axios from "axios";
import PersonalProfile from "../Dashboard/PersonalProfile/PersonalProfile";
import Badges from "../Dashboard/Badges/Badges";
import Notifications from "../Dashboard/Notifications/Notifications";
import Contacts from "../Dashboard/Contacts/Contacts";
import Events from "../Dashboard/Events/Events";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.updateSelectedSkills = this.updateSelectedSkills.bind(this);

        this.state = {
            user: {},

            allSkills: [],
            learnedSkills: [],
            selectedSkills: [],

            notifications: [
                {
                    _id: "1",
                    notification: "Jon sent you a message.",
                    time: "Just Now",
                    imagePath: "user"
                },
                {
                    _id: "2",
                    notification: "Jane sent you a message.",
                    time: "1hr ago",
                    imagePath: "user"
                },
                {
                    _id: "3",
                    notification: "Fred sent you a message.",
                    time: "2hr ago",
                    imagePath: "user"
                }
            ],

            connections: [],

            events: [
                {
                    _id: "1",
                    date: "1 January 2019",
                    time: "12 - 2 PM",
                    location: "Melbourne Central",
                    imagePath: "user"
                },
                {
                    _id: "2",
                    date: "8 January 2019",
                    time: "1 - 3 PM",
                    location: "Victoria Market",
                    imagePath: "user"
                },
                {
                    _id: "3",
                    date: "15 January 2019",
                    time: "12 - 2 PM",
                    location: "Melbourne Central",
                    imagePath: "user"
                }
            ]
        };
    }

    componentDidMount() {
        const self = this;

        axios.get("/api/user")
            .then(function (res) {
                self.setState({
                    user: res.data, allSkills: res.data.skills, learnedSkills: res.data.learnedSkills,
                    connections: res.data.connections
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    updateSelectedSkills(id, state) {
        if (state === false) {
            this.setState({
                selectedSkills: [...this.state.selectedSkills, id]
            })
        }
        else {
            this.setState(prevState => ({
                selectedSkills: prevState.selectedSkills.filter(skill_id => skill_id !== id)
            }))
        }
    }

    render() {
        return (
            <div id="page-wrap">
                <div id="dashboard">
                    <PersonalProfile user={this.state.user} connections={this.state.connections}
                        allSkills={this.state.allSkills} learnedSkills={this.state.learnedSkills}
                        updateSelectedSkills={this.updateSelectedSkills} />
                    <Badges />
                    <Notifications notifications={this.state.notifications} />
                    <Contacts connections={this.state.connections} />
                    <Events events={this.state.events} />
                </div>
            </div>
        );
    }
}

export default Dashboard;
