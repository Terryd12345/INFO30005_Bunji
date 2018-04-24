import React, { Component } from "react";

class Award extends Component {

    render() {
        return (
            <div className="award centered">
                {this.props.title}
            </div>
        );
    }
}

export default Award;
