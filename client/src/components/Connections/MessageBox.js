import React, { Component } from "react";

class MessageBox extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        this.props.messageHandler(e, this.state.value);
        this.setState({ value: "" });
    }

    render() {
        return (
            <form id="messageBox" onSubmit={this.handleSubmit}>
                <input id="message" autocomplete="off" type="text" placeholder="Message..." aria-label="Message..." value={this.state.value} onChange={this.handleChange} />
                <button id="send">Send</button>
            </form>
        );
    }
}

export default MessageBox;
