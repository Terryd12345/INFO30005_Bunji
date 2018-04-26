import React, { Component } from "react";

class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
            borderColor: ""
        };
        this.onSelected = this.onSelected.bind(this);
    }

    onSelected(event) {
        if (this.state.isSelected === false) {
            this.setState({ isSelected: true, borderColor: "#8b55a4" });
        } else {
            this.setState({ isSelected: false, borderColor: "" });
        }
    }

    render() {
        const styles = {
            borderColor: this.state.borderColor,
        }

        return (
            <div onClick={this.onSelected}>
                <div className="skills-panel centered" style={styles}>
                    <img src={require(`../../images/${this.props.picName}.png`)} alt="{this.props.title}" />
                    {this.props.title}
                </div>
            </div>
        );
    }
}

export default Skill;
