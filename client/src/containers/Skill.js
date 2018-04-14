import React, { Component } from "react";

class Skill extends Component {
    constructor(props) {
        super(props);
      this.state = { isSelected: false };
    }

    onSelected(event) {
        if(this.state.isSelected === false) {
            this.setState({ isSelected: true });
        } else {
            this.setState({ isSelected: false });
        }
    }
    
    render() {
        return (
            <div className="skills-panel centered">
                Skill
            </div>
        );
    }
}

export default Skill;
