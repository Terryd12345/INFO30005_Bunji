import React, { Component } from "react";

class Skill extends Component {
    constructor(props) {
        super(props);
    
        this.onSelected = this.onSelected.bind(this);
        
        this.state = {
            isSelected: false,
            borderColor: ""
        };
    }

    onSelected() {
        if (this.state.isSelected === false) {
            this.setState({ isSelected: true, borderColor: "#8b55a4" });
        } else {
            this.setState({ isSelected: false, borderColor: "" });
        }
    }

    render() {
        const style = {
            borderColor: this.state.borderColor
        }

        return (
            <div onClick={this.onSelected} className="skills-panel centered" style={style}>
                <img src={require(`../../../images/skills/${this.props.imagePath}.png`)} alt={this.props.skill} />
                {this.props.skill}
            </div>
        );
    }
}

export default Skill;
