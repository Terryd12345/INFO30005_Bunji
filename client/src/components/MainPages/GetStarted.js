import React, { Component } from "react";
import SkillSelection from "../GetStarted/Skills/SkillSelection";
import UserSelection from "../GetStarted/Users/UserSelection";
import SignUp from "../SignUp/SignUp";

class GetStarted extends Component {
    constructor(props) {
        super(props);
    
        this.showRegister = this.showRegister.bind(this);
        this.toSection2 = this.toSection2.bind(this);
        this.toSection3 = this.toSection3.bind(this);
        this.handleSection1 = this.handleSection1.bind(this);
        this.handleSection2 = this.handleSection2.bind(this);
        
        this.state = {
            loggedIn: true,
            
            showSection1: true,
            doneSection1: true,
            tickSection1: false,
            
            showSection2: false,
            doneSection2: true,
            tickSection2: false,
            
            showSection3: false
        };
    }
    
    showRegister = () => {
        this.signup.showRegister();
    }
    
    toSection2() {
        if (this.state.doneSection1 === false) {
            this.setState({ showSection2: false });
        } else {
            this.setState({ showSection2: true, showSection1: false, tickSection1: true });
        }
    }
    
    toSection3() {
        if (this.state.doneSection2 === false) {
            this.setState({ showSection3: false });
        } else {
            if (this.state.loggedIn === false) {
                this.showRegister();
            } else {
                this.setState({showSection3: true, showSection2: false, tickSection2: true});
            }
        }
    }
    
    handleSection1() {
        if (this.state.tickSection1 === true && this.state.showSection1 === false) {
            this.setState({ showSection1: true });
        } else if (this.state.tickSection1 === true && this.state.showSection1 === true) {
            this.setState({ showSection1: false });
        }
    }
    
    handleSection2() {
        if (this.state.tickSection2 === true && this.state.showSection2 === false) {
            this.setState({ showSection2: true });
        } else if (this.state.tickSection2 === true && this.state.showSection2 === true) {
            this.setState({ showSection2: false });
        }
    }
    
    render() {
        const disabled = {
            backgroundColor: "#eee",
            borderColor: "#bbb",
            color: "#bbb"
        }
        
        return (
            <div className="get-started">
                <div id="section-1">
                    <header onClick={this.handleSection1} className="section-header" style={(this.state.showSection1 && !this.state.tickSection1) ? null : disabled}>
                        <h2>
                            1. Select Skills
                            {
                                this.state.tickSection1 ? (
                                    <span><img src={require(`../../images/tick.png`)} alt="Completed" /></span>
                                ) : (null)
                            }
                        </h2>
                    </header>
                    
                    {
                        this.state.showSection1 ? (
                            <div className="section-content">
                                <SkillSelection />
                                
                                <a onClick={this.toSection2} className="button" id="skill-selection-btn"
                                   href={this.state.doneSection1 ? "#section-2" : null}>
                                    Find Mentor
                                </a>
                            </div>
                        ) : (null)
                    }
                </div>
                
                <div onClick={this.handleSection2} id="section-2">
                    <header className="section-header" style={(this.state.showSection2 && !this.state.tickSection2) ? null : disabled}>
                        <h2>2. Find Mentor
                        {
                            this.state.tickSection2 ? (
                                <span><img src={require(`../../images/tick.png`)} alt="Completed" /></span>
                            ) : (null)
                        }
                        </h2>
                    </header>
    
                    {
                        this.state.showSection2 ? (
                            <div className="section-content">
                                <UserSelection />
    
                                <SignUp ref={signup => this.signup = signup} />
                                <a onClick={this.toSection3} className="button" id="user-selection-btn"
                                   href={this.state.doneSection2 ? "#section-3" : null}>
                                    Confirm
                                </a>
                            </div>
                        ) : (null)
                    }
                </div>
                
                <div id="section-3">
                    <header className="section-header" style={this.state.showSection3 ? null : disabled}>
                        <h2>3. Learn Skills</h2>
                    </header>
    
                    {
                        this.state.showSection3 ? (
                            <div className="wrapper" id="get-started">
                                <header className="header">
                                    <h2>All good!</h2>
                                    <h6>Once a mentor confirms your request, you can start learning your skills.</h6>
                                </header>
                
                                <a className="button" id="get-started-btn" href="/dashboard">
                                    View Dashboard
                                </a>
                            </div>
                        ) : (null)
                    }
                </div>
            </div>
        );
    }
}

export default GetStarted;
