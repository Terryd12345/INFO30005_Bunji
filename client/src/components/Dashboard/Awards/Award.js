import React, { Component } from "react";

class Award extends Component {
    render() {
        return (
            <div className="award centered">
                {this.props.caption}
            </div>
        );
    }
}

export default Award;
