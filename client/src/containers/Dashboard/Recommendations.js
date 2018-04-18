import React, { Component } from 'react';
import Skill from '../Skill';

class Recommendations extends Component {

    render() {
        return (
            <div className="recommendations">
                <Skill title="Facebook" picName="facebook" />
                <Skill title="Instagram" picName="twitter" />
                <Skill title="Mobile Apps" picName="apple" />
            </div>
        );
    }
}

export default Recommendations;
