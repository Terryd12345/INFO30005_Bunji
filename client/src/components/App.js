import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import { MoonLoader } from "react-spinners";
import Header from "./Header";
import Footer from "./Footer";

const Loading = () => <div id="loading"><MoonLoader loading={true} /></div>;

const Home = Loadable({
    loader: () => import("./MainPages/Home"),
    loading: Loading,
});

const Welcome = Loadable({
    loader: () => import("./MainPages/Welcome"),
    loading: Loading,
});

const GetStarted = Loadable({
    loader: () => import("./MainPages/GetStarted"),
    loading: Loading,
});

const Dashboard = Loadable({
    loader: () => import("./MainPages/Dashboard"),
    loading: Loading,
});

const UserSelection = Loadable({
    loader: () => import("./GetStarted/Users/UserSelection"),
    loading: Loading,
});

const Relationships = Loadable({
    loader: () => import("./MainPages/Relationships"),
    loading: Loading,
});

const NotFound = Loadable({
    loader: () => import("./NotFound"),
    loading: Loading,
});

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" render={(props) => (props.location.pathname !== "/") && <Header />} />
                    
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/welcome" component={Welcome} />
                        <Route exact path="/get-started" component={GetStarted} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/connections" component={Relationships} />
                        <Route exact path="/find-mentor" component={UserSelection} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                    
                    <Footer />
                </div>
            </BrowserRouter>
        );
    };
};

export default App;
