import React, { Component } from "react";
import MessageBox from "./MessageBox";
import Messages from "./Messages";

class ChatWindow extends Component {
    render() {
        return (
            <div id="chatBox">
                <Messages chat={this.props.chat} userID={this.props.userID} />
                <MessageBox messageHandler={this.props.messageHandler} />
            </div>
        );
    }
}

export default ChatWindow;
