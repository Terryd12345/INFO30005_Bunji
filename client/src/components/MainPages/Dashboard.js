import React, { Component } from "react";
import PersonalProfile from "../Dashboard/PersonalProfile";
import Badges from "../Dashboard/Badges/Badges";
import Notifications from "../Dashboard/Notifications/Notifications";
import Contacts from "../Dashboard/Contacts/Contacts";
import Events from "../Dashboard/Events/Events";
// import Recommendations from "../Dashboard/Recommendations";
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userDetails: {},
            user: {
                firstName: "John",
                imagePath: "user"
            },

            awards: [
                {
                    caption: "Welcome!"
                },
                {
                    caption: "First Skill"
                },
                {
                    caption: "Contact a Mentor"
                },
                {
                    caption:"3 Days In"
                },
                {
                    caption: "5 Out Of 5"
                },
                {
                    caption: "Logged In 10 Days"
                },
                {
                    caption: "Learn 3 New Skills"
                },
                {
                    caption: "Super Learner"
                },
                {
                    caption: "First Birthday"
                },
                {
                    caption: "Second Birthday"
                },
                {
                    caption: "Third Birthday"
                },
                {
                    caption: "Fourth Birthday"
                }
            ],

            notifications: [
                {
                    notification: "Jon sent you a message.",
                    time: "Just Now",
                    imagePath: "user"
                },
                {
                    notification: "Jane sent you a message.",
                    time: "1hr ago",
                    imagePath: "user"
                },
                {
                    notification: "Fred sent you a message.",
                    time: "2hr ago",
                    imagePath: "user"
                }
            ],

            contacts: [
                {
                    firstName: "Jon",
                    lastName: "Doe",
                    imagePath: "user"
                },
                {
                    firstName: "Jane",
                    lastName: "Doe",
                    imagePath: "user"
                },
                {
                    firstName: "Fred",
                    lastName: "Doe",
                    imagePath: "user"
                }
            ],

            events: [
                {
                    date: "1 January 2019",
                    time: "12 - 2 PM",
                    location: "Melbourne Central",
                    imagePath: "user"
                },
                {
                    date: "8 January 2019",
                    time: "1 - 3 PM",
                    location: "Victoria Market",
                    imagePath: "user"
                },
                {
                    date: "15 January 2019",
                    time: "12 - 2 PM",
                    location: "Melbourne Central",
                    imagePath: "user"
                }
            ],

            recommendations: [
                {
                    skill: "Facebook",
                    imagePath: "facebook"
                },
                {
                    skill: "Twitter",
                    imagePath: "twitter"
                },
                {
                    skill: "Instagram",
                    imagePath: "instagram"
                },
                {
                    skill: "LinkedIn",
                    imagePath: "linkedin"
                },
                {
                    skill: "iPad",
                    imagePath: "apple"
                }
            ]
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        var self = this;
        axios.get("/api/user")
            .then(function (res) {
                self.setState({ userDetails: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(this.state);
    }

    render() {

        return (
            <div id="page-wrap">
                <div id="dashboard">
                    <PersonalProfile user={this.state.userDetails} awards={this.state.awards} />
                    <Badges />
                    <Notifications notifications={this.state.notifications} />
                    <Contacts users={this.state.contacts} />
                    <Events events={this.state.events} />
                    {/*<Recommendations skills={this.state.recommendations} />*/}
                </div>
            </div>
        );
    }
}

export default Dashboard;
