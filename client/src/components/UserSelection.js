import React, { Component } from 'react';

import User from '../containers/User';

export default class UserSelection extends Component {

  render() {
    return (
      <div className="userSelection">
          <div className="wrapper">
              <header className="header">We found 3 mentors for you!</header>

              <article className="mentor-content">
                  <User />
                  <User />
                  <User />
              </article>

              <a href="#"><button className="button" id="find-mentor-btn">Confirm</button></a>
          </div>
      </div>
    );
  }
}