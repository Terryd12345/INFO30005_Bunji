import React, { Component } from "react";
import Award from "./Award";

class Awards extends Component {
    render() {
        return (
            <div id="awards">
                {
                    this.props.awards.map(award => {
                        return <Award caption={award.caption} />;
                    })
                }
            </div>
        );
    }
}

export default Awards;
