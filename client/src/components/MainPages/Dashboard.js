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
            selectedSkills: [],
            
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
            ]
        };
    }

    componentDidMount(){
        var self = this;
        
        axios.get("/api/user")
            .then(function (res) {
                self.setState({ user: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
        
        axios.get("/api/allSkills")
            .then(function (res) {
                self.setState({ allSkills: res.data });
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
                    <PersonalProfile user={this.state.user} allSkills={this.state.allSkills} updateSelectedSkills={this.updateSelectedSkills} />
                    <Badges />
                    <Notifications notifications={this.state.notifications} />
                    <Contacts users={this.state.contacts} />
                    <Events events={this.state.events} />
                </div>
            </div>
        );
    }
}

export default Dashboard;
