import React, { Component } from "react";
import { BeatLoader } from "react-spinners";

class Messages extends Component {
    constructor(props) {
        super(props);
        
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.myRef.scrollTop = this.myRef.scrollHeight;
    }

    render() {
        return (
            <div id="messages-outer">
                <div ref={(el) => { this.myRef = el }} id="messages">
                    {
                        (this.props.chat.length < 1) ? (
                            <div className="section-loading">
                                <BeatLoader loading={true} />
                            </div>
                        ) : (
                            <div>
                                {
                                    this.props.chat.messages.map(message => {
                                        if (message.sender === this.props.userID) {
                                            return <div key={message._id} className="message own">{message.message}</div>;
                                        } else {
                                            return <div key={message._id} className="message other">{message.message}</div>;
                                        }
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Messages;
