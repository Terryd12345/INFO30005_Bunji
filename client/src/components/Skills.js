import React, { Component } from 'react';
import Skill from '../containers/Skill';

export default class Skills extends Component {

  render() {
    return (
      <div className="skills">
        <Skill />
        <Skill />
        <Skill />
      </div>
    );
  }
}
