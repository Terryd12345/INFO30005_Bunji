import React, { Component } from "react";

class Connections extends Component {
    render() {
        return (
            <div id="connections">
                {
                    this.props.chats.map(chat => {
                        return <div className="connection" onClick={(e) => this.props.chatHandler(e, chat.chatID)}>{chat.user2}</div>;
                    })
                }
            </div>
        );
    }
}

export default Connections;
