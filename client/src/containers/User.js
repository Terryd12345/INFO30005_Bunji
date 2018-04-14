import React, { Component } from "react";

export default class User extends Component {

    constructor(props){
        super(props);
        this.state = { isSelected: false, color:'#ccc' };
        this.onSelected = this.onSelected.bind(this);
    }

    onSelected(event) {
        if(this.state.isSelected === false){
          this.setState({ isSelected: true, color:'lightgreen' });
        } else {
          this.setState({ isSelected: false, color:'#ccc' });
        }
    }

    render() {
      return (
        <div className="user"
        onClick={this.onSelected}
        >
            <div className="mentor-panel"
            style={{backgroundColor:this.state.color}}>
                <div className="mentor-pic">
                    <img src={require("../images/user.png")} alt="Profile" />
                </div>
                <div className="mentor-desc">
                    <h1>John Doe</h1>
                    <h3>21 / Male / Melbourne</h3>
                    <h5>Skills: Facebook, Twitter</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
            </div>
        </div>
      );
    }
    
}
