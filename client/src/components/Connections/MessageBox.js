import React, { Component } from "react";

class MessageBox extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            value: ""
        };
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.value !== "") {
            this.props.messageHandler(e, this.state.value);
            this.setState({
                value: ""
            });
        }
    }

    render() {
        return (
            <form id="messageBox" onSubmit={this.handleSubmit}>
                <input
                    id="message"
                    type="text"
                    placeholder="Message..."
                    aria-label="Message..."
                    value={this.state.value}
                    onChange={this.handleChange}
                    autoComplete="off" />
                <button id="send">Send</button>
            </form>
        );
    }
}

export default MessageBox;
