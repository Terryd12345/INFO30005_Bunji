import React, { Component } from "react";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import Notification from "./Notification";

class Notifications extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loading: true,
            currentUserID: ""
        };
    }
    
    componentDidMount() {
        const self = this;
        
        axios.get("/api/user")
            .then(function (res) {
                self.setState({
                    loading: false,
                    currentUserID: res.data._id
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    render() {
        const events = this.props.events.slice(-10);
        
        return (
            <div className="section" id="notifications">
                <header className="section-title">
                    <h3>Notifications</h3>
                </header>
    
                {
                    this.state.loading ? (
                        <div className="section-loading">
                            <BeatLoader loading={this.state.loading}/>
                        </div>
                    ) : (
                        <div id="notifications-content">
                            {
                                (events.length < 1) ? (
                                    <div className="empty">
                                        <h6>No notifications yet.</h6>
                                    </div>
                                ) : (
                                    <div>
                                        {
                                            events.reverse()
                                                .map(event => {
                                                return <Notification
                                                    key={event._id}
                                                    user1={event.user1}
                                                    user2={event.user2}
                                                    createdDate={event.createdDate}
                                                    currentUserID={this.state.currentUserID}/>;
                                            })
                                        }
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Notifications;
