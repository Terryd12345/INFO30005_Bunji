import React, { Component } from "react";

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.scrollToBotton = this.scrollToBotton.bind(this);
    }

    componentDidMount() {
        this.scrollToBotton();
    }

    componentDidUpdate() {
        this.scrollToBotton();
    }

    scrollToBotton() {
        this.myRef.scrollTop = this.myRef.scrollHeight;
    }

    render() {
        return (
            <div ref={(el) => { this.myRef = el; }} id="messages">
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