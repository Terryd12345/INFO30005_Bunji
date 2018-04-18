import React, { Component } from "react";

class Skill extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSelected: false,
            borderColor: "transparent"
        };
        this.onSelected = this.onSelected.bind(this);
    }
    
    onSelected(event) {
        if (this.state.isSelected === false) {
            this.setState({ isSelected: true, borderColor: "#fafcee" });
        } else {
            this.setState({ isSelected: false, borderColor: "transparent" });
        }
    }
    
    render() {
        const styles = {
            borderColor: this.state.borderColor,
        }

        return (
            <div className="skill"  onClick={this.onSelected}>
                <div className="skills-panel centered" style={styles}>
                    <img src={require("../images/Facebook.png")} alt={this.props.title} />
                    {this.props.title}
                </div>
            </div>
        );
    }
}

export default Skill;
