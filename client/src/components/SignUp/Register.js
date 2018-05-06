import React, { Component } from "react";

class Register extends Component {
    render() {
        return (
            <form action="/action_page.php">
                <label htmlFor="first-name" id="first-name">First Name</label>
                <label htmlFor="last-name" id="last-name">Last Name</label>
                
                <input type="text" name="first-name" id="first-name" required />
                <input type="text" name="last-name" id="last-name" required />

                <label htmlFor="birth-date" id="birth-date">Date of Birth</label>
                <label htmlFor="gender" id="gender">Gender</label>
                <br />
                
                <select name="month" id="month" defaultValue="">
                    <option value="" disabled={true}>Month</option>
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                </select>
                <input type="text" name="day" placeholder="Day" id="day" required />
                <input type="text" name="year" placeholder="Year" id="year" required />
                
                <select name="gender" id="gender" defaultValue="">
                    <option value="" disabled={true}>---</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <br />
                
                <label htmlFor="location">Location</label>
                <input type="text" name="location" required />
                
                <label htmlFor="email">Email</label>
                <input type="text" name="email" required />
                
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />
                
                <label htmlFor="password-confirm">Confirm Password</label>
                <input type="password" name="password-confirm" required />
                
                <p>By creating an account, you agree to our <a href="">Terms & Privacy</a>.</p>
                
                <div id="modal-button">
                    <button type="submit" className="button" id="signup-btn">Register</button>
                </div>
            </form>
        )
    };
};

export default Register;
