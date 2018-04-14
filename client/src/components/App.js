import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import UserSelection from "./UserSelection";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

class App extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <div className="content">
                            <Route exact path="/" component={ Home } />
                            <Route exact path="/select-skills" component={ Skills } />
                            <Route exact path="/find-mentor" component={ UserSelection } />
                            <Route exact path="/dashboard" component={ Dashboard } />
                            <Route exact path="/profile" component={ Profile } />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    };
};

export default App;
