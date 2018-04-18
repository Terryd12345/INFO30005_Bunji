import React, { Component } from "react";

class Skill extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSelected: false,
            border: "10px solid transparent"
        };
        this.onSelected = this.onSelected.bind(this);
    }

    onSelected(event) {
        if (this.state.isSelected === false) {
            this.setState({ isSelected: true, color: "10px solid #fafcee" });
        } else {
            this.setState({ isSelected: false, color: "10px solid transparent" });
        }
    }


    render() {
        const styles = {
            border: this.state.color,
        }

        return (
            <div className="skill"  onClick={this.onSelected}>
                <div className="skills-panel centered" style={styles}>
                    {this.props.title}
                </div>
            </div>
        );
    }
}

export default Skill;
