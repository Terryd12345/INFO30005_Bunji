import React, { Component } from 'react';

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
                    <img src={require("../images/user.png")} />
                </div>
                <div className="mentor-desc">
                    <p>blah blah blah</p>
                </div>
            </div>
        </div>
      );
    }
}
