import React, { Component } from "react";
import Scroll from "react-scroll-to-element";
import SignUp from "../SignUp/SignUp";

class Home extends Component {
    showRegister = () => {
        this.signup.showRegister();
    }
    
    showLogin = () => {
        this.signup.showLogin();
    }
    
    render() {
        return (
            <div id="page-wrap">
                <div id="welcome">
                    <video id="welcome-video" autoPlay muted loop>
                        <source src={require(`../../images/home.mp4`)} type="video/mp4" />
                    </video>
                    
                    <div className="overlay centered">
                        <SignUp ref={signup => this.signup = signup} />
                        <h5 className="fade-in" id="menu"><a onClick={this.showRegister.bind(this)}>Register</a><a onClick={this.showLogin.bind(this)}>Log In</a></h5>
                        
                        <h1 className="fade-in">Bunji</h1>
                        <h4 className="fade-in">It's never too late to learn!</h4>
                        <a className="button fade-in" id="welcome-btn" href="get-started">
                            Get Started!
                        </a>
                        <Scroll type="id" element="about">
                            <span className="arrow">
                                <img src={require(`../../images/arrow.png`)} alt="Icon" width="30px" />
                            </span>
                        </Scroll>
                    </div>
                </div>
        
                <div id="about">
                    <div id="about-pic"></div>
                    
                    <div id="about-desc">
                        <h1>What is Bunji?</h1>
                        <p>Bunji is a social platform that connects older adults with talented younger adults who have plenty of skills to share. Bunji is a social platform that connects older adults with talented younger adults who have plenty of skills to share. Bunji is a social platform that connects older adults with talented younger adults who have plenty of skills to share. Bunji is a social platform that connects older adults with talented younger adults who have plenty of skills to share.</p>
                    </div>
                </div>
                
                <div id="steps">
                    <header id="steps-title">
                        <h1>How Bunji Works</h1>
                    </header>
                    
                    <div id="steps-content">
                        <div className="step" id="step-1">
                            <div className="step-header">
                                <div className="step-number centered">1</div>
                                <div className="step-caption centered">Select Skills</div>
                            </div>
                            
                            <div className="step-panel">
                                <p>Pick what you want to learn. You can select from more than fifty skills available. Pick what you want to learn. You can select from more.</p>
                            </div>
                        </div>
    
                        <div className="step" id="step-2">
                            <div className="step-header">
                                <div className="step-number centered">2</div>
                                <div className="step-caption centered">Find Mentor</div>
                            </div>
                            
                            <div className="step-panel">
                                <p>Find a mentor that can help. You can select from more than fifty skills available. Pick what you want to learn. You can select from more than.</p>
                            </div>
                        </div>
    
                        <div className="step" id="step-3">
                            <div className="step-header">
                                <div className="step-number centered">3</div>
                                <div className="step-caption centered">Learn Skills</div>
                            </div>
                            
                            <div className="step-panel">
                                <p>Connect with the mentor of your choice. You can select from more than fifty skills available. Pick what you want to learn. You can select.</p>
                            </div>
                        </div>
                    </div>

                    <a onClick={this.showRegister.bind(this)} className="button fade-in" id="about-btn">
                        Register
                    </a>
                </div>
            </div>
        );
    };
};

export default Home;
