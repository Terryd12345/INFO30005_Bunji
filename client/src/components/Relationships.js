import React, { Component } from "react";
import ChatWindow from '../containers/ChatWindow';

class Relationships extends Component {
    render() {
        return (
            <div id="relationships">
                <div id="chat">
                    <div id="connections">

                    </div>
                    <ChatWindow />

                </div>
                <div id="calendar">

                </div>
            </div>
        );
    }
}

export default Relationships;
