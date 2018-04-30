import React, { Component } from "react";

class User extends Component {
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
            <div onClick={this.onSelected} className="user-panel" style={style}>
                <div className="user-pic">
                    <img src={require("../../../images/user.png")} alt="Profile" />
                </div>
                
                <div className="user-desc centered">
                    <h3>{this.props.name}</h3>
                    <h4>{this.props.age} / {this.props.gender} / {this.props.location}</h4>
                    <h6>Skills: {this.props.skills.map(x => x).reduce((prev, curr) => [prev, ", ", curr])}</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
            </div>
        );
    }
}

export default User;
