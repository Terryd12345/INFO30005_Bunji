import React, { Component } from "react";
import ChatWindow from '../containers/Connections/ChatWindow';
import Connections from '../containers/Connections/Connections';
import Calendar from '../containers/Connections/Calendar';

class Connections extends Component {
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

export default Connections;
