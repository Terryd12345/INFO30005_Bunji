import React, { Component } from 'react';

class Connections extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="connections">
                {this.props.chats.map(chat => {
                    return <div className="connection" onClick={(e) => this.props.chatHandler(e, chat.chatID)}>{chat.user2}</div>;
                })}
            </div>
        );
    }   
}

export default Connections;
