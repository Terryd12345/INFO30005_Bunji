import React, { Component } from 'react';

class Skill extends Component {
  constructor(props){
    super(props);
    this.state = { isSelected: false };

  }

  onSelected(event){
    if(this.state.isSelected === false){
      this.setState({ isSelected: true });
    } else {
      this.setState({ isSelected: false });
    }

  }

  render() {
    return (
      <div className="skill">
        <h4>Skill Here</h4>
      </div>
    );
  }
}

export default Skill;
