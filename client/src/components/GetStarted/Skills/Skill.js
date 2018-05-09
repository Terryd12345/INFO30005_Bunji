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
        if (this.state.isSelected) {
            this.setState({
                backgroundColor: "#f3e5f5",
                borderColor: "#8b55a4"
            });
        } else {
            this.setState({
                backgroundColor: "",
                borderColor: ""
            });
        }
    }

    onSelected() {
        if (this.state.isSelected) {
            this.setState({
                isSelected: false,
                backgroundColor: "",
                borderColor: ""
            });
        } else {
            this.setState({
                isSelected: true,
                backgroundColor: "#f3e5f5",
                borderColor: "#8b55a4"
            });
        }
        this.props.updateSelected(this.props.functionType, this.props.skill._id, this.state.isSelected);
    }

    render() {
        const style = {
            backgroundColor: this.state.backgroundColor,
            borderColor: this.state.borderColor
        };

        return (
            <div onClick={this.onSelected} className="skills-panel centered" style={style}>
                <img src={require(`../../../images/skills/${this.props.skill.imagePath}.png`)}
                     alt={this.props.skill.skill} />
                {this.props.skill.skill}
            </div>
        );
    }
}

export default Skill;
