import React, { Component } from "react";

class NotFound extends Component {
    render() {
        return (
            <div id="page-wrap">
                <div id="not-found">
                    <div id="not-found-pic"/>
            
                    <div className="centered" id="not-found-desc-outer">
                        <div className="overlay centered" id="not-found-desc">
                            <h1>404</h1>
                            <h5>Sorry! The page you were looking for could not be found.</h5>
        
                            <a href="/" className="button" id="welcome-btn">Go Back</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound;
