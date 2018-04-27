import React, { Component } from "react";

class Register extends Component {
    render() {
        return (
            <div id="register">
                <form action="/action_page.php">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    
                    <hr />
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />
                    
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    
                    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                    
                    <input type="checkbox" checked="checked" name="remember" />
                    <label>Remember me</label>
                    
                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                    
                    <div className="clearfix">
                        <button type="submit" className="signup">Register</button>
                    </div>
                </form>
            </div>
        )
    };
};

export default Register;
