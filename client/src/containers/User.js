import React, { Component } from "react";

class User extends Component {
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
            <div onClick={this.onSelected}>
                <div className="user-panel" style={styles}>
                    <div className="user-pic">
                        <img src={require("../images/user.png")} alt="Profile" />
                    </div>
                    <div className="user-desc">
                        <h1>{this.props.name}</h1>
                        <h3>{this.props.age} / {this.props.gender} / {this.props.location}</h3>
                        <h5>Skills: {this.props.skills.map(x => x).reduce((prev, curr) => [prev, ", ", curr])}</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
