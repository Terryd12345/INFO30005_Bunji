import React, { Component } from 'react';

export default class User extends Component {

  render() {
    return (
      <div className="user">
          <div className="mentor-panel">
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
