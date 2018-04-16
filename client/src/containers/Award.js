import React, { Component } from 'react';

class Award extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="award centered">
                {this.props.title}
            </div>
        );
    }
}

export default Award;
