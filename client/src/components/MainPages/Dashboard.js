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

            connections: [
                {
                    "_id": "5aebf0f519c95f09964a5265",
                    "skills": [
                        {"_id":"5ae977b7762c284337d33c82","skill":"Facebook","imagePath":"facebook","__v":0},
                        {"_id":"5ae977d1762c284337d33c83","skill":"Twitter","imagePath":"twitter","__v":0}
                    ],
                    "connections": [],
                    "firstName": "Jon",
                    "lastName": "Doe",
                    "birthDate": "1997-01-01T00:00:00.000Z",
                    "gender": "Male",
                    "location": "Melbourne",
                    "isMentor": true,
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "imagePath": "user",
                    "__v": 0
                },
                {
                    "_id": "5aebf20f83101509a708a4ac",
                    "skills": [
                        {"_id":"5ae977b7762c284337d33c82","skill":"Facebook","imagePath":"facebook","__v":0},
                        {"_id":"5ae977d1762c284337d33c83","skill":"Twitter","imagePath":"twitter","__v":0}
                    ],
                    "connections": [],
                    "firstName": "Jane",
                    "lastName": "Doe",
                    "birthDate": "1999-01-01T00:00:00.000Z",
                    "gender": "Female",
                    "location": "Melbourne",
                    "isMentor": true,
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "imagePath": "user",
                    "__v": 0
                },
                {
                    "_id": "5aebf23783101509a708a4ad",
                    "skills": [
                        {"_id":"5ae977b7762c284337d33c82","skill":"Facebook","imagePath":"facebook","__v":0},
                        {"_id":"5ae97896c7ae04439da1424f","skill":"YouTube","imagePath":"youtube","__v":0}
                    ],
                    "connections": [],
                    "firstName": "Fred",
                    "lastName": "Doe",
                    "birthDate": "1994-01-01T00:00:00.000Z",
                    "gender": "Male",
                    "location": "Melbourne",
                    "isMentor": true,
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    "imagePath": "user",
                    "__v": 0
                }
            ],

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

    componentDidMount(){
        var self = this;
        
        // Use this if you are not logged in as Bunji Bunji.
        // =================================================
        // axios.get("/api/allSkills")
        //     .then(function (res) {
        //         self.setState({ allSkills: res.data });
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        
        // Use this if you are logged in as Bunji Bunji.
        // =================================================
        axios.get("/api/user")
            .then(function (res) {
                self.setState({ user: res.data, allSkills: res.data.skills, connections: res.data.connections });
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
                    <PersonalProfile user={this.state.user} connections={this.state.connections} allSkills={this.state.allSkills} updateSelectedSkills={this.updateSelectedSkills} />
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
