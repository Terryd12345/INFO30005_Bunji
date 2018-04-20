import React, { Component } from "react";
import ChatWindow from '../Connections/ChatWindow';
import Connections from '../Connections/Connections';
import Events from '../Dashboard/Events/Events'

class Relationships extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: [
                {
                    user1: "Omja Das",
                    user2: "John Doe",
                    chatID: 0,
                    messages: [
                        {
                            date: new Date(2018, 3, 1),
                            sender: "Omja Das",
                            message: "hey"
                        },
                        {
                            date: new Date(2018, 3, 2),
                            sender: "John Doe",
                            message: "how are you?"
                        },
                        {
                            date: new Date(2018, 3, 3),
                            sender: "Omja Das",
                            message: "good"
                        }
                    ]
                },
                {
                    user1: "Omja Das",
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
            ],
            chatID: 0
        }

        this.chatHandler = this.chatHandler.bind(this);
        this.messageHandler = this.messageHandler.bind(this);
    }

    chatHandler(e, newChatID) {
        e.preventDefault();
        this.setState({ chatID: newChatID });
    }

    messageHandler(e, newMessage) {
        e.preventDefault();
        let c = this.state.chats.slice();
        c[this.state.chatID].messages.push({ date: new Date(), sender: c[this.state.chatID].user1, message: newMessage });
        this.setState({ chats: c });
    }

    render() {
        return (
            <div id="relationships">
                <div id="chat">
                    <Connections chats={this.state.chats} chatHandler={this.chatHandler} />
                    <ChatWindow chat={this.state.chats[this.state.chatID]} messageHandler={this.messageHandler} />
                </div>
                <Events />
            </div>
        );
    }
}

export default Relationships;
