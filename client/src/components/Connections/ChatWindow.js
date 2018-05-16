import React, { Component } from "react";
import MessageBox from "./MessageBox";
import Messages from "./Messages";

class ChatWindow extends Component {
    render() {
        return (
            <div>
            <h1>{this.props.name}</h1>
            <div id="chatBox">
                <Messages chat={this.props.chat} userID={this.props.userID} />
                <MessageBox messageHandler={this.props.messageHandler} />
            </div>
            </div>
        );
    }
}

export default ChatWindow;
