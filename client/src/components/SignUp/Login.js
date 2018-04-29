import React, { Component } from "react";

class Login extends Component {
    render() {
        return (
            <div id="login">
                <form action="/action_page.php">
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" name="email" required />
                    
                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" name="password" required />
    
                    <div id="form-button">
                        <button type="submit" className="button" id="signup-btn">Log In</button>
                    </div>
                </form>
            </div>
        )
    };
};

export default Login;
