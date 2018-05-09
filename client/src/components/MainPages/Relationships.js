import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import ChatWindow from "../Connections/ChatWindow";
import Connections from "../Connections/Connections";
import axios from "axios/index";

class Relationships extends Component {
    constructor(props) {
        super(props);

        this.chatHandler = this.chatHandler.bind(this);
        this.messageHandler = this.messageHandler.bind(this);

        this.state = {
            loading: true,
    
            redirectToHome: false,
            redirectToWelcome: false,
            redirectToGetStarted: false,
            
            chatID: 0,
            chats: [
                {
                    user1: "Bunji Bunji",
                    user2: "Jon Doe",
                    chatID: 0,
                    messages: [
                        {
                            date: new Date(2018, 3, 1),
                            sender: "Bunji Bunji",
                            message: "Hey"
                        },
                        {
                            date: new Date(2018, 3, 2),
                            sender: "Jon Doe",
                            message: "How are you?"
                        },
                        {
                            date: new Date(2018, 3, 3),
                            sender: "Bunji Bunji",
                            message: "Good"
                        }
                    ]
                },
                {
                    user1: "Bunji Bunji",
                    user2: "Jane Doe",
                    chatID: 1,
                    messages: [
                        {
                            date: new Date(2018, 3, 1),
                            sender: "Jane Doe",
                            message: "Would you like to schedule a meeting?"
                        }
                    ]
                }
            ]
        }
    }
    
    componentDidMount() {
        const self = this;
        
        axios.get("/api/user")
            .then(function (res) {
                if (res.data.description) {
                    if (res.data.skills.length > 0) {
                        self.setState({
                            loading: false
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

    /* ============================================================================================================= */

    chatHandler(e, newChatID) {
        e.preventDefault();
        this.setState({
            chatID: newChatID
        });
    }

    messageHandler(e, newMessage) {
        e.preventDefault();
        let c = this.state.chats.slice();
        
        c[this.state.chatID].messages.push({
            date: new Date(),
            sender: c[this.state.chatID].user1,
            message: newMessage
        });
        
        this.setState({
            chats: c
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
                                this.state.redirectToWelcome ? (<Redirect to="/welcome" />) : (null)
                            }
    
                            {
                                this.state.redirectToGetStarted ? (<Redirect to="/get-started" />) : (null)
                            }
                        </div>
                    ) : (
                        <div id="relationships">
                            <div id="chat">
                                <Connections chats={this.state.chats}
                                             chatHandler={this.chatHandler}/>
                    
                                <ChatWindow chat={this.state.chats[this.state.chatID]}
                                            messageHandler={this.messageHandler}/>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Relationships;
