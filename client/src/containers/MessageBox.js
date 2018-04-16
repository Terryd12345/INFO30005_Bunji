import React, { Component } from 'react';

class MessageBox extends Component {
    readMessage() {

    };
    
    addMessage() {

    };
    
    render() {
        return (
            <div className="messageBox">
            <div id="messageBox">
                <textarea id="message"></textarea>
                <button id="send" onClick="readMessage()">Send</button>
            </div>
            </div>
        );
    }
}

export default MessageBox;
