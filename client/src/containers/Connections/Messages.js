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
                    const connection = this.props.chat.connection;
                    if (connection === message.sender) {
                        return <div className="message other">{message.message}</div>;
                    } else {
                        return <div className="message own">{message.message}</div>;
                    }
                })}
            </div>
        )
    }
}

export default Messages;