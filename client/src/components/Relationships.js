import React, { Component } from "react";

class Relationships extends Component {
    render() {
        return (
            <div id="relationships">
                <div id="chat">
                    <div id="connections">
            
                    </div>
                    <div id="chatBox">
                        <div id="messages">
                
                        </div>
                        <div id="messageBox">
                            <textarea id="message"></textarea>
                            <button id="send" onClick="readMessage()">Send</button>
                        </div>
                    </div>
        
                </div>
                <div id="calendar">
        
                </div>
            </div>
        );
    }
}

export default Relationships;
