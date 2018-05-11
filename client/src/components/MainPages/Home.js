import React, { Component } from "react";
import Scroll from "react-scroll-to-element";

class Home extends Component {
    // showRegister = () => {
    //     this.signup.showRegister();
    // }
    //
    // showLogin = () => {
    //     this.signup.showLogin();
    // }
    
    render() {
        return (
            <div id="page-wrap">
                <div id="home">
                    <div id="home-video-outer">
                        <video id="home-video" autoPlay muted loop>
                            <source src={require(`../../images/home.mp4`)} type="video/mp4" />
                        </video>
                    </div>
                    
                    <div className="overlay centered">
                        {/*<SignUp ref={signup => this.signup = signup} />*/}
                        {/*<h5 className="fade-in" id="menu"><a onClick={this.showRegister.bind(this)}>Register</a><a onClick={this.showLogin.bind(this)}>Log In</a></h5>*/}
                        
                        {/*<a className="button-google fade-in" id="menu" href="/auth/google">*/}
                            {/*<div className="button-google-content-wrapper">*/}
                                {/*<div className="button-google-icon">*/}
                                    {/*<div className="button-google-icon-image">*/}
                                        {/*<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48">*/}
                                            {/*<g>*/}
                                                {/*<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />*/}
                                                {/*<path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />*/}
                                                {/*<path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />*/}
                                                {/*<path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />*/}
                                                {/*<path fill="none" d="M0 0h48v48H0z" />*/}
                                            {/*</g>*/}
                                        {/*</svg>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<span className="button-google-contents">*/}
                                    {/*Sign in with Google*/}
                                {/*</span>*/}
                            {/*</div>*/}
                        {/*</a>*/}
    
                        {/*<a className="button fade-in" id="home-btn" href="/get-started">*/}
                            {/*Get Started!*/}
                        {/*</a>*/}
                        {/*<a onClick={this.showRegister.bind(this)} className="button fade-in" id="steps-btn">*/}
                            {/*Register*/}
                        {/*</a>*/}
                        
                        <h1 className="fade-in">Bunji</h1>
                        <h4 className="fade-in">It's never too late to learn!</h4>
    
                        <a className="button-google fade-in" href="/auth/google">
                            <div className="button-google-content-wrapper">
                                <div className="button-google-icon">
                                    <div className="button-google-icon-image">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48">
                                            <g>
                                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                                                <path fill="none" d="M0 0h48v48H0z" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                
                                <span className="button-google-contents">
                                    Sign in with Google
                                </span>
                            </div>
                        </a>
                        
                        <Scroll type="id" element="about">
                            <span className="arrow">
                                <img src={require(`../../images/icons/arrow-down.png`)} alt="Icon" />
                            </span>
                        </Scroll>
                    </div>
                </div>
        
                <div id="about">
                    <div id="about-pic" />
                    
                    <div id="about-desc">
                        <h1>What is Bunji?</h1>
                        <p>Bunji is an online mentoring program exclusively created for older adults as an avenue for continuous learning beyond age numbers. Bunji aims to provide a platform that would enable older adults to easily connect with younger adults, especially those who are excited to share the knowledge and skills they have mastered. Reverse mentorship, as many called it, is an invaluable learning opportunity for both mentor and mentee, and is definitely an experience you would not want to miss.</p>
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
                                <p>Pick what you want to learn. Select from more than ten skills available, ranging from social media apps, desktop applications, to the latest smart devices.</p>
                            </div>
                        </div>
    
                        <div className="step" id="step-2">
                            <div className="step-header">
                                <div className="step-number centered">2</div>
                                <div className="step-caption centered">Find Mentor</div>
                            </div>
                            
                            <div className="step-panel">
                                <p>We will find mentors with the specific skills which you are interested in. View their profiles and send messages to those who suit your preferences.</p>
                            </div>
                        </div>
    
                        <div className="step" id="step-3">
                            <div className="step-header">
                                <div className="step-number centered">3</div>
                                <div className="step-caption centered">Learn Skills</div>
                            </div>
                            
                            <div className="step-panel">
                                <p>Learn the skills you have always wanted. Keep track of your progress through your event journal, and collect fun badges for every achievement you made.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Home;
