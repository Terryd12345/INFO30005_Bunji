import React, { Component } from "react";

class Login extends Component {
    render() {
        return (
            <div>
                <form action="/action_page.php">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />

                    <div id="modal-button">
                        <button type="submit" className="button" id="signup-btn">Log In</button>
                    </div>
                </form>
            </div>
        )
    };
};

export default Login;
