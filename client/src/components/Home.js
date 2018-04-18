import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div id="home">

                <div className="overlay centered">
                    <h1 className="fade-in">Bunji</h1>
                    <h3 className="fade-in">It's never too late to learn!</h3>

                    <div className="fade-in" id="intro">
                        <p>Bunji is a social platform that connects older adults with talented younger adults who have
                           plenty of skills to share.</p>
                    </div>

                    <a className="button fade-in" id="home-btn" href="select-skills">
                        Get Started!
                    </a>

                </div>

                <div id="team">
                    <p>Website by Omja Das, Terence Denning, Brigita Tunru</p>
                </div>

            </div>
        );
    };
};

export default Home;
