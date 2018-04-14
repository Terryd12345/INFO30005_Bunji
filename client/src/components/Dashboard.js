import React, { Component } from 'react';

import Award from '../containers/Awards';
import Profile from '../containers/Profile';
import Relationships from '../containers/Relationships';
import Recommendations from '../containers/Recommendations';

export default class Dashboard extends Component {

  render() {
    return (
      <div className="dashboard">
        <Profile />
        <Award />
        <Relationships />
        <Recommendations />
      </div>
    );
  }
}
