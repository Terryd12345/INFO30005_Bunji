import React, { Component } from 'react';

class MessageBox extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.readMessage = this.readMessage.bind(this);
        this.addMessage = this.addMessage.bind(this);
    }

    render() {
        return (
            <div id="messageBox" action="">
                <input id="message" autocomplete="off" type="text" placeholder="Message..." aria-label="Message..." onkeydown="if (event.keyCode == 13)document.getElementById('send').click()" />
                <button id="send" onClick={this.readMessage}>Send</button>
            </div>
        );
    }
}

export default MessageBox;
