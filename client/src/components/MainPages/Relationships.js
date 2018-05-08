import React, { Component } from "react";
import ChatWindow from "../Connections/ChatWindow";
import Connections from "../Connections/Connections";

class Relationships extends Component {
    constructor(props) {
        super(props);

        this.chatHandler = this.chatHandler.bind(this);
        this.messageHandler = this.messageHandler.bind(this);

        this.state = {
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

    render() {
        return (
            <div id="page-wrap">
                <div id="relationships">
                    <div id="chat">
                        <Connections chats={this.state.chats}
                                     chatHandler={this.chatHandler} />
                        
                        <ChatWindow chat={this.state.chats[this.state.chatID]}
                                    messageHandler={this.messageHandler} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Relationships;
