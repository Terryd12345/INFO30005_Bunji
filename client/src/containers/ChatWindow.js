import React, { Component } from 'react';
import MessageBox from './MessageBox';

class ChatWindow extends Component {

    loadMessages(){

    };

    render() {
        return (
            <div className="chatWindow">
            <div id="chatBox">
                <div id="messages">

                </div>
                <MessageBox />
            </div>
            </div>
        );
    }
}

export default ChatWindow;
