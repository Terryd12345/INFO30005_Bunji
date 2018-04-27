import React, { Component } from "react";

class Login extends Component {
    render() {
        return (
            <div id="login">
                <form action="/action_page.php">
                    <h1>Log In</h1>
                    
                    <hr />
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />
                    
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    
                    <input type="checkbox" checked="checked" name="remember" />
                    <label>Remember me</label>
                    
                    <div className="clearfix">
                        <button type="submit" className="signup">Log In</button>
                    </div>
                </form>
            </div>
        )
    };
};

export default Login;
