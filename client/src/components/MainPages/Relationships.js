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
        this.getConnections = this.getConnections.bind(this);
        this.getChat = this.getChat.bind(this);

        this.state = {
            loading: true,

            redirectToHome: false,
            redirectToWelcome: false,
            redirectToGetStarted: false,

            userID: 0,
            connectionID: 0,
            connections: [],
            chat: []
        }
    }

    componentWillMount() {
        this.getConnections();
    }

    componentDidMount() {
        let refreshChat = setInterval(this.getChat, 1000);
        const self = this;
        self.setState({
            chat: refreshChat
        });
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


    getConnections() {
        const self = this;
        axios.get("/api/user")
            .then(function (res) {
                self.setState({
                    userID: res.data._id,
                    connections: res.data.connections,
                    connectionID: res.data.connections[0]._id
                });
                self.getChat(self.state.connections[0]._id);
            });
    }

    getChat(newConnectionID) {
        const self = this;
        axios.get(`/api/chat/${newConnectionID}`)
            .then(function (res) {
                self.setState({ connectionID: newConnectionID, chat: res.data });
                console.log(self.state.chat);
            });
    }


    chatHandler(e, newConnectionID) {
        e.preventDefault();
        this.setState({ connectionID: newConnectionID });
        this.getChat(newConnectionID);
    }

    messageHandler(e, newMessage) {
        e.preventDefault();

        var messageObject = {
            date: new Date(),
            sender: this.state.userID,
            message: newMessage
        }
        axios.post(`/api/chat/${this.state.connectionID}`, messageObject)

        let c = this.state.chat;
        c.messages.push(messageObject);
        this.setState({
            chat: c
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
                                this.state.redirectToWelcome ? (<Redirect to="/welcome" />) : (null)
                            }
                            {
                                this.state.redirectToGetStarted ? (<Redirect to="/get-started" />) : (null)
                            }
                        </div>
                    ) : (
                            <div id="relationships">
                                <div id="chat">
                                    <Connections
                                        connections={this.state.connections}
                                        chatHandler={this.chatHandler} />

                                    <ChatWindow
                                        chat={this.state.chat}
                                        userID={this.state.userID}
                                        messageHandler={this.messageHandler} />
                                </div>
                            </div>
                        )
                }
            </div>
        );
    }
}

export default Relationships;
