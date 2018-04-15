import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div id="home">
        
                <div className="overlay centered">
                    <h1 className="fade-in">Bunji</h1>
                    <h3 className="fade-in">It's never too late to learn.</h3>
            
                    {/* Description */}
                    <div className="fade-in" id="intro">
                        <p>Bunji is a social platform that connects older adults with talented younger adults who have
                           plenty of skills to share.</p>
                    </div>
            
                    <a className="fade-in" href="select-skills">
                        <button className="button">Get Started!</button>
                    </a>
            
                    {/* Countdown
                    <div class="fade-in" id="countdown">
                        <div>
                            <span class="days"></span>
                            <div class="caption">Days</div>
                        </div>
                        <div>
                            <span class="hours"></span>
                            <div class="caption">Hours</div>
                        </div>
                        <br class="break">
                        <div>
                            <span class="minutes"></span>
                            <div class="caption">Minutes</div>
                        </div>
                        <div>
                            <span class="seconds"></span>
                            <div class="caption">Seconds</div>
                        </div>
                    </div>
                    */}
                </div>
        
                {/* Team */}
                <div id="team">
                    <p>Made by Omja Das, Terence Denning, Brigita Tunru</p>
                </div>
    
            </div>
        );
    }
}

export default Home;
