import React, { Component } from "react";
import MessageBox from "./MessageBox";
import Messages from "./Messages";

class ChatWindow extends Component {
    render() {
        return (
            <div className="chatWindow">
                <div id="chatBox">
                    <Messages chat={this.props.chat} />
                    <MessageBox messageHandler={this.props.messageHandler} />
                </div>
            </div>
        );
    }
}

export default ChatWindow;
