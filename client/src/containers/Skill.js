import React, { Component } from 'react';

class Skill extends Component {
    

  render() {
    return (
      <div className="skill"  onClick='alert("hi")'>
          <div
          className="skills-panel centered">
              Facebook
          </div>
      </div>
    );
  }
}

export default Skill;
