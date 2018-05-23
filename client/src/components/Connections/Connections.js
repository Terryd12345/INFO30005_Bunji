import React, { Component } from "react";

class Connections extends Component {
    render() {
        return (
            <div id="connections">
                {
                    this.props.connections.map(connection => {
                        if (connection._id === this.props.connectionID) {
                            return <div key={connection._id} className="connection selected">{connection.firstName + " " + connection.lastName}</div>;
                        } else {
                            return <div key={connection._id} className="connection" onClick={(e) => this.props.chatHandler(e, connection._id)}>{connection.firstName + " " + connection.lastName}</div>;
                        }
                    })
                }
            </div>
        );
    }
}

export default Connections;
