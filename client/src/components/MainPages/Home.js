import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div id="home">
                <div id="welcome">
                    <video id="welcome-video" autoPlay muted loop>
                        <source src={require(`../../images/home.mp4`)} type="video/mp4" />
                    </video>
                    
                    <div className="overlay centered">
                        <h5 className="menu fade-in"><a href="signup">Register</a><a href="signup">Login</a></h5>
                        <h1 className="fade-in">Bunji</h1>
                        <h3 className="fade-in">It's never too late to learn!</h3>
                        <a className="button fade-in" id="welcome-btn" href="get-started">
                            Get Started!
                        </a>
                        <a className="arrow" href="#about">
                            <img src={require(`../../images/arrow.png`)} alt="Icon" width="30px" />
                        </a>
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
                    <div className="wrapper">
                        <header id="steps-title">
                            <h1>How Bunji Works</h1>
                        </header>
                        
                        <article id="steps-content">
                            <div className="steps-panel">
                                <div className="steps-number centered">1</div>
                                <div className="steps-caption centered">Select Skills</div>
                                <p>Pick what you want to learn. You can select from more than fifty skills available. Pick what you want to learn. You can select from more.</p>
                            </div>
                            <div className="steps-panel">
                                <div className="steps-number centered">2</div>
                                <div className="steps-caption centered">Find Mentor</div>
                                <p>Find a mentor that can help. You can select from more than fifty skills available. Pick what you want to learn. You can select from more than.</p>
                            </div>
                            <div className="steps-panel">
                                <div className="steps-number centered">3</div>
                                <div className="steps-caption centered">Learn Skills</div>
                                <p>Connect with the mentor of your choice. You can select from more than fifty skills available. Pick what you want to learn. You can select.</p>
                            </div>
                        </article>
    
                        <a className="button fade-in" id="about-btn" href="signup">
                            Register
                        </a>
                    </div>
                </div>
            </div>
        );
    };
};

export default Home;
