import React, { Component } from 'react';

export default class Header extends Component {

  render() {
    return (
      <div className="header">
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/skills">Skills</a>
        <a href="/mentors">Mentors</a>
      </div>
    );
  }
}
