import React, { Component } from 'react';

import User from '../containers/User';

export default class UserSelection extends Component {

  render() {
    return (
      <div className="userSelection">
        <User />
        <User />
        <User />
        <User />
      </div>
    );
  }
}
