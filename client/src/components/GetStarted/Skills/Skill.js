import React, { Component } from "react";

class Skill extends Component {
    constructor(props) {
        super(props);

        this.onSelected = this.onSelected.bind(this);

        this.state = {
            isSelected: this.props.isSelected,
            backgroundColor: "",
            borderColor: ""
        };
    }

    componentDidMount() {
        if (this.state.isSelected === false) {
            this.setState({ backgroundColor: "", borderColor: "" });
        } else {
            this.setState({ backgroundColor: "#f3e5f5", borderColor: "#8b55a4" });
        }
    }

    onSelected() {
        if (this.state.isSelected === false) {
            this.setState({ isSelected: true, backgroundColor: "#f3e5f5", borderColor: "#8b55a4" });
        } else {
            this.setState({ isSelected: false, backgroundColor: "", borderColor: "" });
        }
        this.props.updateSelectedSkills(this.props.skill._id, this.state.isSelected);
    }

    render() {
        const style = {
            backgroundColor: this.state.backgroundColor,
            borderColor: this.state.borderColor
        };

        return (
            <div onClick={this.onSelected} className="skills-panel centered" style={style}>
                <img src={require(`../../../images/skills/${this.props.skill.imagePath}.png`)} alt={this.props.skill.skill} />
                {this.props.skill.skill}
            </div>
        );
    }
}

export default Skill;
