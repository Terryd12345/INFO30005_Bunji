import React, { Component } from "react";
import ChatWindow from '../containers/ChatWindow';
import Connections from '../containers/Connections';
import Calendar from '../containers/Calendar';

class Relationships extends Component {
    render() {
        return (
            <div id="relationships">
                <div id="chat">
                    <Connections />
                    <ChatWindow />
                </div>
                <Calendar />
            </div>
        );
    }
}

export default Relationships;
