import React, { Component } from "react";

class Skill extends Component {
    constructor(props){
        super(props);
        this.state = { isSelected: false, color: "#ccc" };
        this.onSelected = this.onSelected.bind(this);
    }
    
    onSelected(event) {
        if(this.state.isSelected === false){
            this.setState({ isSelected: true, color: "lightgreen" });
        } else {
            this.setState({ isSelected: false, color: "#ccc" });
        }
    }
    
    render() {
        return (
            <div className="skill"  onClick={this.onSelected}>
                <div className="skills-panel centered" style={{backgroundColor:this.state.color}}>
                    Facebook
                </div>
            </div>
        );
    }
}

export default Skill;
