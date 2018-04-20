import React, { Component } from 'react';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id="messages">
                {this.props.chat.messages.map(message => {
                    if (message.sender === this.props.chat.user1) {
                        return <div className="message own">{message.message}</div>;
                    } else {
                        return <div className="message other">{message.message}</div>;
                    }
                })}
            </div>
        )
    }
}

export default Messages;