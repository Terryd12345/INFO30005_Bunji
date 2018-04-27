import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import { MoonLoader } from "react-spinners";

import Header from "./Header";
import Footer from "./Footer";

const Loading = () => <div id="loading"><MoonLoader loading={true} /></div>;

// const Header = Loadable({
//     loader: () => import("./Header"),
//     loading: Loading,
// })

const Dashboard = Loadable({
    loader: () => import("./MainPages/Dashboard"),
    loading: Loading,
})

const Home = Loadable({
    loader: () => import("./MainPages/Home"),
    loading: Loading,
})

const Profile = Loadable({
    loader: () => import("./MainPages/Profile"),
    loading: Loading,
})

const Relationships = Loadable({
    loader: () => import("./MainPages/Relationships"),
    loading: Loading,
})

const NotFound = Loadable({
    loader: () => import("./NotFound"),
    loading: Loading,
})

const GetStarted = Loadable({
    loader: () => import("./MainPages/GetStarted"),
    loading: Loading,
})

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" render={(props) => (props.location.pathname !== "/")
                                                    // && (props.location.pathname !== "/select-skills")
                                                    // && (props.location.pathname !== "/find-mentor")
                                                    && <Header />} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/get-started" component={GetStarted} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/connections" component={Relationships} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    };
};

export default App;
