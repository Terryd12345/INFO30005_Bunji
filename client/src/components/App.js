import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>
const Skills = () => <h2>Skills</h2>
const Landing = () => <h2>Home</h2>

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <div className="content">
              <Route exact path='/' component={Landing} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/skills' component={Skills} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  };
};

export default App;
