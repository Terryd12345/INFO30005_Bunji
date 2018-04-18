import React, { Component } from 'react';
import Skill from './Skill';

class Recommendations extends Component {

    render() {
        return (
            <div className="recommendations">
                <Skill title="Facebook" />
                <Skill title="Instagram" />
                <Skill title="Mobile Apps" />
            </div>
        );
    }
}

export default Recommendations;
