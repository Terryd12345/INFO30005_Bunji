import React, { Component } from "react";

class SignUp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            cityData: []
        };
    };

    componentDidMount() {
    
    }

    render() {
        return (
            <div className="wrapper" id="login">
                <div id="signup">
                    <h1>Login</h1>
                </div>
            </div>
        );
    };
};

export default SignUp;
