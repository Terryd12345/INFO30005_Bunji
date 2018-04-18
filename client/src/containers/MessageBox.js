import React, { Component } from 'react';

class MessageBox extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.readMessage = this.readMessage.bind(this);
        this.addMessage = this.addMessage.bind(this);
    }
    readMessage() {
        var message = document.querySelector("#message").value;
        this.addMessage(message, true);
        document.querySelector("#message").value = "";
        // chats[currChat].messages.push({
        //     date: new Date(),
        //     sender: "Omja Das",
        //     message: message
        // });
    };

    addMessage(message, self) {
        var messages = document.querySelector("#messages");
        var newMessage = document.createElement("div");
        var newMessageContent = document.createTextNode(message);
    
        newMessage.appendChild(newMessageContent);
        newMessage.className = self ? "message own" : "message other";
    
        messages.appendChild(newMessage);
        messages.scrollTop = messages.scrollHeight;
    };

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
