import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";


const Loading = () => <div>Loading...</div>;

const Header = Loadable({
    loader: () => import('./Header'),
    loading: Loading,
})

const Dashboard = Loadable({
    loader: () => import('./MainPages/Dashboard'),
    loading: Loading,
})

const UserSelection = Loadable({
    loader: () => import('./Users/UserSelection'),
    loading: Loading,
})

const Home = Loadable({
    loader: () => import('./MainPages/Home'),
    loading: Loading,
})

const Skills = Loadable({
    loader: () => import('./Skills/SkillSelection'),
    loading: Loading,
})

const Profile = Loadable({
    loader: () => import('./MainPages/Profile'),
    loading: Loading,
})

const Relationships = Loadable({
    loader: () => import('./MainPages/Relationships'),
    loading: Loading,
})

const SignUp = Loadable({
    loader: () => import('./MainPages/Signup'),
    loading: Loading,
})

const NotFound = Loadable({
    loader: () => import('./NotFound'),
    loading: Loading,
})

class App extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Route path="/" render={(props) => (props.location.pathname !== "/") && <Header />} />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/select-skills' component={Skills} />
                            <Route exact path='/find-mentor' component={UserSelection} />
                            <Route exact path='/profile' component={Profile} />
                            <Route exact path='/dashboard' component={Dashboard} />
                            <Route exact path='/connections' component={Relationships} />
                            <Route exact path='/signup' component={SignUp} />
                            <Route path='*' component={NotFound} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    };
};

export default App;
