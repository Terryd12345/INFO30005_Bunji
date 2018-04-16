import React, { Component } from 'react';

class Award extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="award">
                {this.props.title}
            </div>
        );
    }
}

export default Award;
