import React, { Component } from "react";

class Connections extends Component {
    render() {
        return (
            <div id="connections">
                {
                    this.props.connections.map(connection => {
                        return <div className="connection" onClick={(e) => this.props.chatHandler(e, connection._id)}>{connection.firstName + " " + connection.lastName}</div>;
                    })
                }
            </div>
        );
    }
}

export default Connections;
