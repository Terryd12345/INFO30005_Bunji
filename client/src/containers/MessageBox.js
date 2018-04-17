import React, { Component } from 'react';

class MessageBox extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    readMessage() {

    };

    addMessage() {

    };

    render() {
        return (
            <div id="messageBox" action="">
                <input id="message" autocomplete="off" type="text" placeholder="Message..." aria-label="Message..." onkeydown="if (event.keyCode == 13)document.getElementById('send').click()" />
                <button id="send" onClick="readMessage()">Send</button>
            </div>
        );
    }
}

export default MessageBox;
